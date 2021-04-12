import React, { Component } from 'react';
import i18n from '../i18n';

class Perfume extends Component {

  render() {
      return(
        <>
          <h3>{i18n.t('category.perfumes')}</h3>
        </>
      )
  }
}

export default Perfume;
