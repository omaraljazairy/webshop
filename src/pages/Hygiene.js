import React, { Component } from 'react';
import i18n from '../i18n';

class Hygiene extends Component {

  render() {
      return(
        <>
          <h3>{i18n.t('category.hygiene')}</h3>
        </>
      )
  }
}

export default Hygiene;
