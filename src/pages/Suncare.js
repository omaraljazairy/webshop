import React, { Component } from 'react';
import i18n from '../i18n';

class Suncare extends Component {

  render() {
      return(
        <>
          <h3>{i18n.t('category.suncare')}</h3>
        </>
      )
  }
}

export default Suncare;
