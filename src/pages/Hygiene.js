import React, { Component } from 'react';
import i18n from '../i18n';
import Products from '../components/Products/Products';
import ProductDetails from '../components/Products/ProductDetails';

const CATALOG_ID = 'd2467e35-a5a0-4d99-8894-a05542cde161'
class Hygiene extends Component {

  state = {
    productDetails: null
  }

  componentDidUpdate () {
    console.log("component updated")
    const productDetails = this.props.location.state ? this.props.location.state.product : null
    // to avoid max loop error
    if (this.state.productDetails !== productDetails) {
      this.setState({productDetails: productDetails})
    }
    
  }

  render() {
    console.log("props received: ", this.props)
    const basePath = this.props.location.pathname
    const productDetails = this.state.productDetails
    console.log("base path: ", basePath)
    console.log("productDetails: ", productDetails)
      return(
        <>
          <h3>{i18n.t('category.hygiene')}</h3>
          {productDetails == null
          ? <Products catalogId={CATALOG_ID} basePath={basePath}/>
          : <ProductDetails product={productDetails} />
           }
          
        </>
      )
  }

}

export default Hygiene;
