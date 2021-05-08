import React from 'react';
import '../../assets/css/product.css';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ProductCard = (props) => (
    
    <Card style={{ width: '18rem' }} >
    <Card.Img variant="top" src={props.img} />
    <Card.Body>
      <Card.Title>{props.brand} - {props.index}</Card.Title>
      <Card.Text>
          {props.description}
      </Card.Text>
      <Button variant="primary">{props.id}</Button>
    </Card.Body>
  </Card>
)

ProductCard.propTypes = {
    img: PropTypes.string,
    brand: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.string,
    index: PropTypes.number
}

export default ProductCard;