import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
// import { API } from 'aws-amplify';
import { API, graphqlOperation } from '@aws-amplify/api';
import { getUser } from '../graphql/queries';
import { createMarketOrder } from '../graphql/mutations';
import 'react-notifications-component/dist/theme.css';
import { store } from 'react-notifications-component';
import { history } from '../App';



const stripeConfig = {
    pubkey: process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY,
    currency: "EUR"

}

const PayButton = ({product, user, handleResponse}) => {
    const [paymentStatus, setPaymentStatue] = useState(null);
    const totalPrice = Math.round(product.price * 100)
    const getOwnerEmail = async ownerId => {
        try {
            const input = {id: ownerId}
            const result = await API.graphql(graphqlOperation(getUser, input))
            console.log("result from getUser: ", result);
            return result.data.getUser.email;
        } catch(err) {
            console.error('error fetching product owner email: ', err);
        }

    }

    const createShippingAddress = source => (
        {
            city: source.address_city,
            country: source.address_country,
            address_line1: source.address_line1,
            address_state: source.address_state ? source.address_state : source.address_city,
            address_zip: source.address_zip
        }
    )

    const handleCharge = async (token) => {
        try {
            const ownerEmail = await getOwnerEmail(product.owner)
            console.log("product order details: ", product)
            console.log("ownerEmail: ", {ownerEmail})
            const response = await API.post('orderlambda', '/charge', {
                body: {
                    token,
                    charge: {
                        description: product.description,
                        amount: totalPrice,
                        currency: stripeConfig.currency
                    },
                    email: {
                        customerEmail: user.attributes.email,
                        shipped: product.shipped,
                        ownerEmail
                    }
                },
            })
            console.log("response: ", response)
            if (response.status === "succeeded") {
                setPaymentStatue(true)
                console.log('paymentstatus: ', response.status);
                
                let shippingAddress = null;
                if (product.shipped) {
                    shippingAddress = createShippingAddress(response.source);
                }
                const input = {
                    marketOrderUserId: user.attributes.sub,
                    marketOrderMarketproductId: product.id,
                    shippingAddress: shippingAddress
                }
                try {
                    const createdOrderResult = await API.graphql(graphqlOperation(createMarketOrder, {input}))
                    console.log('createdOrderResult: ', createdOrderResult)
                    store.addNotification({
                        title: "SUCCESS!",
                        message: "Thanks for ordering from us",
                        type: "success",
                        insert: "top",
                        container: "top-center",
                        animationIn: ["animate__animated", "animate__fadeIn"],
                        animationOut: ["animate__animated", "animate__fadeOut"],
                        width: 400,
                        dismiss: {
                            duration: 5000,
                            onScreen: true
                        },
                        onRemoval: (id, removedBy) => {
                            console.log("notification is removed")
                            history.push('/')
                        }
                    })
    
                } catch(err) {
                    console.error("order not created: ", err)
                }

            }
        } catch (err) {
            console.error('Error with charging: ',err)
            store.addNotification({
                title: "ERROR!",
                message: "An error occured",
                type: "danger",
                insert: "top",
                container: "top-center",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                width: 400,
                dismiss: {
                    duration: 5000,
                    onScreen: true
                },
                onRemoval: (id, removedBy) => {
                    console.log("notification is removed")
                }
            })

        }

    }

    const isPaid = paymentStatus;
    console.log("isPaid: ", isPaid)

    return (
        <StripeCheckout
          token={handleCharge}
          email={user.attributes.email}
          name={product.description}
          amount={totalPrice}
          currency={stripeConfig.currency}
          stripeKey={stripeConfig.pubkey}
          shippingAddress={product.shipped}
          billingAddress={product.shipped}
          locale="auto"
          allowRememberMe={false}
          something={(paymentStatus) => handleResponse(paymentStatus)}
         />
        // <div>PayButton</div>
    )
}


export default PayButton;