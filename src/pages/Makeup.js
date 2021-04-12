import React, { Component } from 'react';
import i18n from '../i18n';

class Makeup extends Component {

  render() {
      return(
        <>
          <h3>{i18n.t('category.makeup')}</h3>
        </>
      )
  }
}

export default Makeup;
