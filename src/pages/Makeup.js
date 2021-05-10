import React, { Component } from 'react';
import i18n from '../i18n';
import Products from '../components/Products/Products';

class Makeup extends Component {

  render() {
      return(
        <>
          <h3>{i18n.t('category.makeup')}</h3>
          <Products catalogId='375cbe66-6cd6-4a6e-bd7b-b85c6d88ddd9'/>
        </>
      )
  }
}

export default Makeup;