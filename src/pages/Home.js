import React, { Component } from 'react';
import i18n from '../i18n';

class Home extends Component {


  render() {
    
    console.log("home props received: ", this.props);
      return(
        <>
          <h3>{i18n.t('greeting.welcome_to_react')}</h3>
        </>
      )
  }
}

export default Home;
