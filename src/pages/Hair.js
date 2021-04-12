import React, { Component } from 'react';
import i18n from '../i18n';

class Hair extends Component {

  render() {
      return(
        <>
          <h3>{i18n.t('category.hair')}</h3>
        </>
      )
  }
}

export default Hair;
