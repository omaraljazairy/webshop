import React, { Component } from 'react';
import { API, graphqlOperation } from 'aws-amplify'; 
import { updateCustomer } from '../graphql/mutations';


class DeletedAccount extends Component {

  componentDidMount() {
    console.log('signout componentDidMount with props: ', this.props)
    const customerId = this.props.location.state.userId
    console.log('signout componentDidMount with props userId: ', customerId)
    this.handleConfirmDeleted(customerId);
    
  }

  handleConfirmDeleted = async (customerId) => {
        const input = {
            id: customerId,
            deleted: "true"
        }
        console.log("accountDeleted input: ", input )
        try {
            const result = await API.graphql(graphqlOperation(updateCustomer, {input: input}))
            console.log("updated customer result: ", result)
            // this.setState({customer: result.data.updateCustomer})
        } catch(err){
            console.log("customer update error: ", err)
        }
  }



  render() {
      return(
          <h3>Your Account has been deleted successfully</h3>
      )
  }
}

export default DeletedAccount;
