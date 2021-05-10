import React, { Component } from 'react';
import i18n from '../i18n';
import Products from '../components/Products/Products';

class Perfume extends Component {

  render() {
      return(
        <>
          <h3>{i18n.t('category.perfumes')}</h3>
          <Products catalogId='e2afac24-22fd-46ce-86d6-20d7ebacc390'/>
        </>
      )
  }
}

export default Perfume;
