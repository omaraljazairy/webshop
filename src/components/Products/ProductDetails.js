import React, { Component } from 'react';
import i18n from '../../i18n';

class ProductDetails extends Component {


  render() {
    
    console.log("productDetails props received: ", this.props);
      return(
        <>
          <h3>{i18n.t('greeting.welcome_to_react')}</h3>
        </>
      )
  }
}

export default ProductDetails;
