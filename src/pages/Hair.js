import React, { Component } from 'react';
import i18n from '../i18n';
import Products from '../components/Products/Products';
class Hair extends Component {

  render() {
      return(
        <>
          <h3>{i18n.t('category.hair')}</h3>
          <Products catalogId='d37f4e05-adff-4a90-b15e-d390ab84c98c'/>
        </>
      )
  }
}

export default Hair;
