import React, { Component } from 'react';
import i18n from '../i18n';
import Products from '../components/Products/Products';

class Suncare extends Component {

  render() {
      return(
        <>
          <h3>{i18n.t('category.suncare')}</h3>
          <Products catalogId='9e600d71-34fa-4684-b6b7-88baba622ea8'/>
        </>
      )
  }
}

export default Suncare;
