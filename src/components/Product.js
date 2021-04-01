import React, { Component } from 'react';
import { Card, Col } from 'react-bootstrap';
import { S3Image } from 'aws-amplify-react';
import LocalShipping from '@material-ui/icons/LocalShipping';
import PayButton from '../components/PayButton';
import { UserContext } from '../App';

class Product extends Component {

    state = {}

    handlePaymentResponse( value) {
        console.log("Payment status value: ", value);
    }

    render(){

        const { product } = this.props

        return (
            <UserContext.Consumer>
            {
            ({user}) =>  
            <>
                { user ? console.log("user from product: ", user) : "no user" }

                <div>
                    <Card style={{ width: '18rem' }}>
                        <S3Image imgKey={product.file.key} theme={{
                            photoImg: { maxWidht: '100%', maxHeight: '100%' }
                        }} />
                        <Card.Body>
                            <Card.Title>{product.price}</Card.Title>
                                <Card.Text>
                                    {product.descripion}
                                </Card.Text>
                                <Col><LocalShipping />
                                <PayButton product={product} user={user} something={(value) => this.handlePaymentResponse(value)} />
                                </Col>
                                
                        </Card.Body>
                    </Card>
                </div>
            </>
            }
            </UserContext.Consumer>
        )
    }
}

export default Product;