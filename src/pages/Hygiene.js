import React, { Component } from 'react';
import i18n from '../i18n';
import Products from '../components/Products/Products';
class Hygiene extends Component {

  render() {
      return(
        <>
          <h3>{i18n.t('category.hygiene')}</h3>
          <Products catalogId='d2467e35-a5a0-4d99-8894-a05542cde161'/>
        </>
      )
  }
}

export default Hygiene;
