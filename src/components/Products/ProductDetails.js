import React, { Component } from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
import '../../assets/css/productdetail.css'
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Stars from '../Ratings/Stars';
import i18n from '../../i18n';

class ProductDetails extends Component {

    status = {
        cart: {}
    }

  render() {

      const product = this.props.product
      console.log("productDetails props received: ", product);
      return(
        <Container className="product_specifications">
            <Row>
                <Col xs={10} lg={6} className="imageRow">
                <Image src={product.image} className="productimage" />
                </Col>
                <Col md={5}>
                    <Row className="productbrand">
                        {product.brand.name}
                    </Row>                                
                    <Row className="productdescription">
                        {product.description}
                    </Row>                
                    <Row className="productprice">
                        {i18n.t('product_specifications.price')}: €{product.price}
                    </Row>
                    <Row className="productweight">
                        {i18n.t('product_specifications.weight')}: {product.weight} gr
                    </Row>
                    <Row className="productstock">
                        {i18n.t('product_specifications.stock')}: {product.stock}
                    </Row>
                    <Row className="productdelivery">
                        {i18n.t('messages.delivered_within')} 1-2 {i18n.t('messages.days')} 
                    </Row>
                    <Row className="productrating">
                        <Stars rate={product.ratings}/>
                    </Row>
                    <Row>
                        <Button variant="contained" color="primary">
                            {i18n.t('product_specifications.add_to_shoppingcart')}
                        </Button>
                        <input className="inputTextField" defaultValue="1" type="number" size="4"/>
                    </Row>
                </Col>
            </Row>
            <Divider className="divider"/>
        </Container>


      )
  }
}

export default ProductDetails;
