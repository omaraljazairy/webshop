import React, {Component} from 'react';
import { Button, Table } from 'semantic-ui-react';
import FormDialog from '../components/Dialogs/FormDialog';
import { Dialog } from '@material-ui/core';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';



class Profile extends Component {

    state = {
        customer: null,
        isEdit: false,
        street: '',
        state: '',
        zipcode: '',
        city: '',
        country: 'ES',
        email: '',
        phone_number: '',
        fullName: '',
        locale: ''
    }


    componentDidMount() {
        // if the customer is passed with values and the shippingAddress is not null,
        // set the value in the state. 
        const {customer, useremail } = this.props;
        console.log("profile componentDidMount loaded");
        console.log('props received in profile componentDidMount: ', this.props)
        console.log('customer received in componentDidMount: ', customer)
        console.log('customer email received profile in componentDidMount: ', useremail)
            
        // set the state for the email and username
        this.setState(
            {
                email: useremail
            }
        );
        
        this.updateCustomerStates();
    }

    componentDidUpdate() {
        console.log("Profile updated with new props: ", this.props);
        // use the if statement to avoid the componenet from having a loop with iupdates.
        if (this.state.email !== this.props.useremail) {
            this.setState(
                {
                    email: this.props.useremail
                });
        } else if (this.state.customer !== this.props.customer) {
            console.log("customer status updated in componentDidUpdate")
            this.setState(
                {
                    customer: this.props.customer,
                }
            )
            const shippingAddress = this.props.customer.shippingAddress
            console.log("shipping address in componentDidUpdate: ", shippingAddress)
            this.setState(
                {
                    street: shippingAddress ? shippingAddress.address_line1 : '',
                    zipcode: shippingAddress ? shippingAddress.address_zip : '',
                    state: shippingAddress ? shippingAddress.address_state : '',
                    city: shippingAddress ? shippingAddress.city : '',
                    country: shippingAddress ? shippingAddress.country : 'ES',
                    phone_number: this.props.customer.phone_number ? this.props.customer.phone_number : '',
                    fullName: this.props.customer.fullName ? this.props.customer.fullName: '',
                    locale: this.props.customer.locale ? this.props.customer.locale : ''

                }
            )             
            // this.updateCustomerStates()
        }
    }


    updateCustomerStates() {
        const {customer} = this.props;
        console.log('customer received in updateCustomer: ', customer)
            
        // set the state for the email and username
        if (customer) {

            // create a customer and shippingAddress info 
            const shippingAddress = customer.shippingAddress 
            this.setState(
                {
                    street: shippingAddress ? shippingAddress.address_line1 : '',
                    zipcode: shippingAddress ? shippingAddress.address_zip : '',
                    state: shippingAddress ? shippingAddress.address_state : '',
                    city: shippingAddress ? shippingAddress.city : '',
                    country: shippingAddress ? shippingAddress.country : 'ES',
                    phone_number: customer.phone_number ? customer.phone_number : '',
                    fullName: customer.fullName ? customer.fullName : '',
                    locale: customer.locale ? customer.locale : ''
                }
            )
        }
    }

    /**
     * handle the edited shippingAddress state values. 
     * The shippingAddress data in the state should be sent to the account page and 
     * saved. also the isEdit will be set to false
     * @returns void
     */
    handleShippingAddressChange() {
        // when called, send shippingAddress data to the props handleShippingAddressUpdate
        // and set the isEdit to false. 
    
        this.setState({isEdit: false});
        // create a customerInput object and pass it to the account component. 
        const customerInput = {
            id: this.props.userId,
            fullName: this.state.fullName,
            phone_number: this.state.phone_number,
            street: this.state.street,
            city: this.state.city,
            state: this.state.state,
            country: this.state.country,
            zipcode: this.state.zipcode
        }
        console.log("customerInput to be passed: ", customerInput);
        this.props.handleCustomerUpdate(customerInput);
    }

    /**
     * set the textfield values in the state object
     * @param {string} field - the field name of the textfield
     * @param {string} value - the textfield value
     * @returns void
     */
    setEditValues(field, value){
        console.log('field: ', field, ' value: ', value)
        switch(field) {
            case 'street':
                this.setState({street: value});
                break;
            case 'zipcode':
                this.setState({zipcode: value});
                break;
            case 'state':
                this.setState({state: value});
                break;            
            case 'city':
                this.setState({city: value});
                break;
            case 'country':
                this.setState({country: value});
                break;
            case 'phone_number':
                this.setState({phone_number: value});
                break;
            case 'fullName':
                this.setState({fullName: value});
                break;
            default:
                return
        }
    }


    render() {
        const {isEdit, customer, email} = this.state;
        const {username, userId} = this.props;
        console.log("customer received by profile in state: ", customer);
        console.log("customer email received by profile in state: ", email);
        return (
            <div>
            <Table singleLine color={'blue'}>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>UserId</Table.HeaderCell>
                    <Table.Cell>{userId}</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.HeaderCell>UserName</Table.HeaderCell>
                    <Table.Cell>{username}</Table.Cell>
                </Table.Row>                                    
                <Table.Row>
                    <Table.HeaderCell>Email</Table.HeaderCell>
                    <Table.Cell>{email.length > 0 ? email : null}</Table.Cell>
                </Table.Row>
            {/* </Table.Header>
            <Table.Header> */}
                <Table.Row>
                    <Table.HeaderCell colSpan='3'><center>Shipping Info</center></Table.HeaderCell>
                </Table.Row>
            {/* </Table.Header>
            <Table.Header> */}
            <Table.Row>
                <Table.HeaderCell>FullName</Table.HeaderCell>
                <Table.Cell>
                    {isEdit 
                        ? (<TextField
                            autoFocus
                            margin="dense"
                            id="fullNme"
                            label="Full name"
                            type="text"
                            value={this.state.fullName || ''}
                            // fullWidth
                            onChange={event => this.setEditValues('fullName', event.target.value)}
                        />) 
                        : this.state.fullName.length > 0 ? this.state.fullName : null}
                    </Table.Cell>
                </Table.Row>                                    
                <Table.Row>
                    <Table.HeaderCell>Phone Number</Table.HeaderCell>
                    <Table.Cell>
                        {isEdit 
                        ? (<TextField
                            margin="dense"
                            id="phoneNumber"
                            label="Phone number"
                            type="text"
                            value={this.state.phone_number}
                            // fullWidth
                            onChange={event => this.setEditValues('phone_number', event.target.value)}
                        />) 
                        : this.state.phone_number.length > 0 ? this.state.phone_number : null}
                    </Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.HeaderCell>Address</Table.HeaderCell>
                    <Table.Cell>
                        {isEdit 
                        ? (<TextField
                            // autoFocus
                            margin="dense"
                            id="street"
                            label="Street + house number"
                            type="text"
                            value={this.state.street}
                            // fullWidth
                            onChange={event => this.setEditValues('street', event.target.value)}
                        />) 
                        : this.state.street.length > 0 ? this.state.street : null}
                    </Table.Cell>
                </Table.Row>                                    
                <Table.Row>
                    <Table.HeaderCell>Zipcode</Table.HeaderCell>
                    <Table.Cell>
                    {isEdit 
                        ? (<TextField
                            // autoFocus
                            margin="dense"
                            id="zipcode"
                            label="zipcode"
                            type="text"
                            value={this.state.zipcode}
                            // fullWidth
                            onChange={event => this.setEditValues('zipcode', event.target.value)}
                        />) 
                        : this.state.zipcode.length > 0 ? this.state.zipcode : null}    
                    </Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.HeaderCell>City</Table.HeaderCell>
                    <Table.Cell>
                    {isEdit 
                        ? (<TextField
                            // autoFocus
                            margin="dense"
                            id="city"
                            label="city"
                            type="text"
                            value={this.state.city}
                            // fullWidth
                            onChange={event => this.setEditValues('city', event.target.value)}
                        />) 
                        : this.state.city.length > 0 ? this.state.city : null}
                    </Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.HeaderCell>State</Table.HeaderCell>
                    <Table.Cell>
                    {isEdit 
                        ? (<TextField
                            // autoFocus
                            margin="dense"
                            id="state"
                            label="state"
                            type="text"
                            value={this.state.state}
                            // fullWidth
                            onChange={event => this.setEditValues('state', event.target.value)}
                        />) 
                        : this.state.state.length > 0 ? this.state.state : null}
                    </Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.HeaderCell>Country</Table.HeaderCell>
                    <Table.Cell>Spain</Table.Cell>
                </Table.Row>                                    
            </Table.Header>
            <Table.Footer fullWidth>
                <Table.Row>
                    <Table.HeaderCell colSpan='4'>
                    {isEdit 
                    ? (<Button color='green' onClick={() => this.handleShippingAddressChange()}>      Save Shipping Address
                    </Button>) 
                    : (<Button color='blue' onClick={() => this.setState({isEdit: true})}>       Edit Shipping Address
                    </Button>)}
                    <Button color='blue' onClick={() => this.props.handleDialog(true, 'email')}>Change Account Email</Button>

                    <Button floated='right' color='red' onClick={() => this.props.handleConfirmDialog(true)}>Delete Account</Button>
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        </Table>
        {/* )} */}
        {/* <FormDialog show={this.state.showDialog} /> */}
        </div>
        )
        
    }
}

export default Profile;
