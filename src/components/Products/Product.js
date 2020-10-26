import React from 'react';
import '../../assets/css/product.css';
import { Image } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Stars  from '../../components/Ratings/Stars';

export const Product = (props) => {
    
    const styles = {
        image: {
          width: 250,
          height:200,
        },
    }

    return (
        <>
            {props.data.map((product, id) => (
                <li key={id}>
                    <div className="product">
                        <Image src={product.image} style={styles.image} />
                        <div class="productname">{product.name}</div>
                        <div class="productbrand">{product.brand}</div>
                        <div class="productprice">{product.price}</div>
                        <div class="productrating"><Stars rate={product.rating}/></div>
                    </div>
                </li>
            ))}
        </>
    );
};

Product.propTypes = {
    data: PropTypes.array.isRequired
}
