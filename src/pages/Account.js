import React, { Component } from 'react';
import { AmplifyAuthenticator, AmplifyGreetings} from '@aws-amplify/ui-react';
import { Auth, API, graphqlOperation } from 'aws-amplify'
import {Tabs, Tab, Card} from 'react-bootstrap';
import { Button, Table } from 'semantic-ui-react';
import { Dialog } from '@material-ui/core';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import { history } from '../App';

const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      registered
      orders (sortDirection: DESC, limit: 5) {
        items {
          id
          createdAt
          updatedAt
          marketproduct {
            createdAt
            description
            id
            owner
            price
            shipped
            updatedAt
          }
          shippingAddress {
            address_line1
            address_state
            address_zip
            city
            country
          }
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
class Account extends Component {

    state = {
        orders: [],
        emailDialog: false,
        email: null,
        verificationForm: false,
        verificationCode: '',
        confirmDialogOpen: false,
    }

    componentDidMount() {
        console.log('component mounted');
        console.log('props received from App: ', this.props);
        if (this.props.user) {
            this.getUserOrders(this.props.user.attributes.sub)
            this.setState({email: this.props.user.attributes.email})
        }
        
    }

    getUserOrders = async userId => {
        const input = {id: userId};
        const result = await API.graphql(graphqlOperation(getUser, input))
        console.log('results of order: ', result);
        if (result.length) {
            this.setState({orders: result.data.getUser.orders.items})
        }
        
    }



    handleDialog(value) {
        this.setState({emailDialog: value});
    }

    handleEmailChange(value){
        console.log('email value: ', value);
        this.setState({email: value});
    }

    handleSubmit = async () => {
        console.log('Submit pressed with email: ', this.state.email)
        const updatedAttributes = {
            email: this.state.email
        }
        try {
            const result = await Auth.updateUserAttributes(this.props.user, updatedAttributes);
            console.log('result received: ', result)
            if (result === 'SUCCESS'){
                this.setState({verificationForm: true})
                console.log('submit handled')
            }
        } catch(err) {
            console.error('email verification error: ', err);
        }
    }

    // sendVerificationCode = async attr => {
    //     try{
    //         await Auth.verifyCurrentUserAttribute(attr)
    //         console.log('success email sent code');
    //     } catch(err) {
    //         console.error('error verifying email: ', err)
    //     }
        
    // }

    handleVerificationCode = async () => {
        try {
            const result = await Auth.verifyCurrentUserAttributeSubmit(
                'email',
                this.state.verificationCode
            )
            console.log('verificationCode result: ', result)
            this.setState({verificationForm: false, emailDialog: false})

        } catch(err) {
            console.error('VerificationCode error: ', err)
        }
    }

    handleDeleteProfile = async () => {
        console.log("Are you sure you want to delete your account ?")
        try{
            await this.props.user.deleteUser((error, data) => {
                if (error) {
                    console.log('error deleting user: ', error)
                }
                console.log('user deleted successfully');
                console.log('data returned: ', data)
                window.location = 'http://localhost:3000'
            })
        } catch(err) {
            console.error('error deleting user: ', err)
            this.handleConfirmDialog(false)
        }
    }

    handleConfirmDialog(value) {
        this.setState({confirmDialogOpen: value})
    }


    render() {
        const { orders, verificationForm } = this.state;
        const { user } = this.props;

        console.log('orders retrieved: ', orders);

        return(
            <AmplifyAuthenticator>
                <div>
                    <h2>Account Page for user {this.props.user ? <AmplifyGreetings username={this.props.user.attributes.sub}/> : null}</h2>
                    <h2> total orders: {orders ? orders.length : 0}</h2>
                    <div>
                    <Tabs defaultActiveKey="1" id="profile_order">
                        <Tab eventKey="0" title="Profile Summary">
                            {user ? (
                            <Table singleLine>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>Id</Table.HeaderCell>
                                        <Table.Cell>{user.attributes.sub}</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.HeaderCell>UserName</Table.HeaderCell>
                                        <Table.Cell>{user.username}</Table.Cell>
                                    </Table.Row>                                    
                                    <Table.Row>
                                        <Table.HeaderCell>Email</Table.HeaderCell>
                                        <Table.Cell>{this.state.email}</Table.Cell>
                                        <Table.Cell><Button color='blue' onClick={() => this.handleDialog(true)}>Edit</Button></Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.HeaderCell>Phone Number</Table.HeaderCell>
                                        <Table.Cell>{user.attributes.phone_number}</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.HeaderCell>Delete Profile</Table.HeaderCell>
                                        <Table.Cell>Sorry to see you go</Table.Cell>
                                        <Table.Cell><Button color='red' onClick={() => this.handleConfirmDialog(true)}>Delete</Button></Table.Cell>
                                    </Table.Row>                                    
                                </Table.Header>
                            </Table>
                            ) : null }

                       
                    </Tab>
                    <Tab eventKey="1" title="Order History">
                        { orders ? (
                         orders.map(order => (
                            <div key={order.id}>
                                <Card style={{ width: '30rem' }}>
                                    <Card.Header>OrderId: {order.id}</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Purchased on: {order.createdAt}</Card.Title>
                                        <Card.Text>                                    
                                        Product Description: {order.marketproduct.description}</Card.Text>
                                        <Card.Text>Product Price: {order.marketproduct.price}</Card.Text>
                                        {order.shippingAddress && (
                                            <>
                                            <h2>Shipping Address</h2>
                                            <div>
                                                <Card.Text>{order.shippingAddress.address_line1}</Card.Text>
                                                <Card.Text>{order.shippingAddress.address_state}</Card.Text>
                                                <Card.Text>{order.shippingAddress.address_zip}</Card.Text>
                                                <Card.Text>{order.shippingAddress.city}</Card.Text>
                                                <Card.Text>{order.shippingAddress.country}</Card.Text>
                                            </div>

                                            </>
                                        )}
                                    </Card.Body>
                                </Card>
                            </div>
                        ))
                        ) : null }

                        
                    </Tab>
                </Tabs>

                <Dialog open={this.state.emailDialog} onClose={() => this.handleDialog(false)} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Change Email Address</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Provide a new email address and Submit. 
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email"
                        type="email"
                        value={this.state.email}
                        fullWidth
                        onChange={event => this.handleEmailChange(event.target.value)}
                    />
                    {verificationForm ? (
                        <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="VerificationCode"
                        type="text"
                        value={this.state.verificationCode}
                        fullWidth
                        onChange={event => this.setState({verificationCode: event.target.value})}
                    />) : null}
                </DialogContent>
                <DialogActions>
                    {verificationForm ? 
                        <Button onClick={() => this.handleVerificationCode()} color="green">
                        Verifiy Code
                        </Button> : 
                        <Button onClick={() => this.handleSubmit()} color="blue">
                        Save
                        </Button>
                    }

                    <Button onClick={() => this.handleDialog(false)} color="red">
                        Close
                    </Button>
                </DialogActions>
             </Dialog>
             
             <Dialog open={this.state.confirmDialogOpen} onClose={() => this.handleConfirmDialog(false)} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">WARNING</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete your account ?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                        <Button onClick={() => this.handleDeleteProfile()} color="red">
                        Delete
                        </Button>
                    <Button onClick={() => this.handleConfirmDialog(false)} color="blue">
                        Close
                    </Button>
                </DialogActions>
             </Dialog>
                    </div>
                {/* <AmplifySignOut /> */}
                </div>
            </AmplifyAuthenticator>
        );
    }
}

// export default withAuthenticator(Account);
export default Account;
