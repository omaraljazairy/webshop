import React, { Component } from 'react';
import { AmplifyAuthenticator, AmplifySignUp, AmplifyGreetings} from '@aws-amplify/ui-react';
import { Auth, API, graphqlOperation } from 'aws-amplify'
import {Tabs, Tab, Card} from 'react-bootstrap';
import { Button } from 'semantic-ui-react';
import { Dialog } from '@material-ui/core';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import { getCustomer } from '../graphql/queries';
import { updateCustomer } from '../graphql/mutations';
import Profile from './Profile';
import MuiAlert from '@material-ui/lab/Alert'
import { history } from '../App';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />
}

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
        phoneNumberDialog: false,
        phone_number: '',
        email: '',
        verificationForm: false,
        verificationCode: '',
        confirmDialogOpen: false,
        customer: null,
        isDeleted: false
    }

    componentDidMount() {
        console.log('component mounted');
        console.log('props received from App: ', this.props);
        if (this.props.user) {
            this.getUserOrders(this.props.user.attributes.sub)
            this.setState(
                {
                    email: this.props.user.attributes.email,
                    // phone_number: this.props.user.attributes.phone_number
                })
            this.getCustomerInfo(this.props.user.attributes.sub);
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

    /**
     * get the customer object from th db by providing the Id.
     * if customer found, it will be set in the customer object state.
     * @param {string} userId - the customer id
     * @returns void
     */
    getCustomerInfo = async (userId) => {
        console.log("useId received for customer is: ", userId)
        if (userId) {
            const input = {id: userId}
            try {
                const customer = await API.graphql(graphqlOperation(getCustomer, input))
                console.log("customer received: ", customer)
                this.setState({customer: customer.data.getCustomer})
            } catch(err) {
                console.log("failed to get customer")
            }
        } else {
            console.log("no userId provided")
            return;
        }
    }


    updateCustomerInfo = async (userId, customerInfo) => {
        console.log("customerInfo received for update: ", customerInfo)
        if (userId) {
            const input = {
                id: userId,
                email: this.state.email,
                phone_number: this.state.phone_number
            }
            console.log("input received: ", input)
        }
    }



    handleDialog(value, attr) {
        
        if(attr === 'phoneNumber') {
            this.setState({phoneNumberDialog: value});
        } else {
            this.setState({emailDialog: value});
        }

        // if the value is false, set the validationForm to false for both attributes.
        if (!value) {
            this.setState({verificationForm: false});
        } 
        
    }

    handleEmailChange(value){
        console.log('email value: ', value);
        this.setState({email: value});
    }

    handleTextfieldChange(value, attr){
        switch(attr) {
            case 'email':
                this.setState({email: value});
                break;
            default:
                return
        }
        console.log('text change value: ', value);
        
    }

    handleSubmit = async () => {
        console.log('Submit pressed with email: ', this.state.email)
        const updatedAttributes = {
            email: this.state.email
            // phone_number: this.state.phone_number
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

    handleVerificationCode = async (attr) => {
        var new_email = this.state.email
        console.log('attribute received by handleVerificationCode: ', attr);
        console.log('attribute new email by handleVerificationCode: ', new_email);
        try {
            const result = await Auth.verifyCurrentUserAttributeSubmit(
                attr,
                this.state.verificationCode
            )
            console.log('verificationCode result: ', result)
            this.setState({verificationForm: false, emailDialog: false })

        } catch(err) {
            console.error('VerificationCode error: ', err)
        }
    }

    /**
     * delete the user from the cognito api.
     * @todo redirect to a conform deleted account page 
     */
    handleDeleteProfile = async () => {
        console.log("Are you sure you want to delete your account ?")

        try{
            await this.props.user.deleteUser((error, data) => {
                if (error) {
                    console.log('error deleting user: ', error)
                }
                console.log('user deleted successfully');
                console.log('data returned: ', data)
                // this.handleConfirmDeleted(data)
                this.handleConfirmDialog(false)
                history.push({
                    pathname: "/confirm",
                    state: { userId: this.state.customer.id}
                });
        
                // redirect to a confirm deleted account page
            })
        } catch(err) {
            console.error('error deleting user: ', err)
            this.handleConfirmDialog(false)
        }
    }

    handleConfirmDialog(value) {
        this.setState({confirmDialogOpen: value})
    }


    /**
     * TODO
     * @param {*} result 
     */
    // handleConfirmDeleted = async (result) => {
    //     if (result === 'SUCCESS') {
    //         const input = {
    //             id: this.state.customer.id,
    //             deleted: true
    //         }
    //         console.log("accountDeleted input: ", input )
    //         try {
    //             const result = await API.graphql(graphqlOperation(updateCustomer, {input: input}))
    //             console.log("updated customer result: ", result)
    //             // this.setState({customer: result.data.updateCustomer})
    //         } catch(err){
    //             console.log("customer update error: ", err)
    //         }
    //     }
    // }

    /**
     * receive an object with customer and shippingaddress attributes.
     * it will update the customer table and the shippingaddress. 
     * @param {object} customerDataInput
     */
    handleCustomerUpdate = async (customerDataInput) => {

        console.log("handleCustomerUpdate input received: ", customerDataInput)
        const input = {
                id: customerDataInput.id,
                fullName: customerDataInput.fullName,
                phone_number: customerDataInput.phone_number,
                locale: 'es',
                shippingAddress: {
                    city: customerDataInput.city,
                    country: customerDataInput.country,
                    address_line1: customerDataInput.street,
                    address_state: customerDataInput.state,
                    address_zip: customerDataInput.zipcode
                }
            }

        try {
            const result = await API.graphql(graphqlOperation(updateCustomer, {input: input}))
            console.log("updated customer result: ", result)
            this.setState({customer: result.data.updateCustomer})
        } catch(err){
            console.log("customer update error: ", err)
        }
    }

    render() {
        const { orders, verificationForm, customer, email, isDeleted } = this.state;
        const { user } = this.props;
        const alert = (
            <Alert 
                severity="error" 
                onClick={() => this.setState({isLoggedIn: false})}
            >
                some text
            </Alert>
            )

        console.log('orders retrieved: ', orders);
        console.log('user object received in account: ', user);
        console.log('email in state in account: ', email);

        return(
            <AmplifyAuthenticator>
                <AmplifySignUp formFields={
                    [
                        { type: 'username' },
                        { type: 'email' },
                        { type: 'password' }
                    ]
                } slot='sign-up' >
                </AmplifySignUp>
                <div>
                    <h2>Account Page for user {user ? <AmplifyGreetings username={user.username}/> : null}</h2>
                    <h2> total orders: {orders ? orders.length : 0}</h2>
                    <div>
                        {isDeleted ? alert : null}
   
                    <Tabs defaultActiveKey="0" id="profile_order">
                        <Tab eventKey="0" title="Profile Summary">
                            {customer || email ? (
                                <Profile 
                                  customer={customer} 
                                  userId={user.attributes.sub} 
                                  useremail={email} 
                                  username={user.username} 
                                  handleDialog={(value, attr) => this.handleDialog(value, attr)} handleConfirmDialog={() => this.handleConfirmDialog(true)}
                                  handleCustomerUpdate={(input) => this.handleCustomerUpdate(input)}
                                  />
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

                <Dialog open={this.state.emailDialog} onClose={() => this.handleDialog(false, 'email')} aria-labelledby="form-dialog-title">
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
                        onChange={event => this.handleTextfieldChange(event.target.value, 'email')}
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
                        <Button onClick={() => this.handleVerificationCode('email')} color="green">
                        Verifiy Code
                        </Button> : 
                        <Button onClick={() => this.handleSubmit()} color="blue">
                        Save
                        </Button>
                    }
                    <Button onClick={() => this.handleDialog(false, 'email')} color="red">
                        Cancel
                    </Button>
                </DialogActions>
             </Dialog>
             
             <Dialog open={this.state.phoneNumberDialog} onClose={() => this.handleDialog(false, 'phoneNumber')} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Change Phone number</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Provide a new phone number and Submit. 
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="phoneNumber"
                        type="text"
                        value={this.state.phone_number}
                        fullWidth
                        onChange={event => this.handleTextfieldChange(event.target.value, 'phoneNumber')}
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
                        <Button onClick={() => this.handleVerificationCode('phone_number')} color="green">
                        Verifiy Code
                        </Button> : 
                        <Button onClick={() => this.handleSubmit()} color="blue">
                        Save
                        </Button>
                    }
                    <Button onClick={() => this.handleDialog(false, 'phoneNumber')} color="red">
                        Cancel
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
