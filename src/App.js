import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Headers/Header';
import Body  from './components/Body/Body';
import Footer from './components/Footers/Footer';
import { Account } from './pages/Account';
import { Cart } from './pages/Cart';
import { Home } from './pages/Home';
import ProductCategory from './pages/ProductCategory';
import { Shoes } from './pages/Shoes';
import { NoMatch } from './pages/NoMatch';
import SideDrawer from './components/SideDrawers/SideDrawer';
import Backdrop from './components/Backdrops/Backdrop';

class App extends Component {

  state = {
    sideDrawerOpen: false
  };

  drawerToggleHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    });
  }

  backdropToggleHandler = () => {
    this.setState({sideDrawerOpen: false});
  }


  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropToggleHandler} />;
    }

    return (
      <>
        <Router>
          <Header drawerHandler={this.drawerToggleHandler}/>
          <SideDrawer show={this.state.sideDrawerOpen} drawerHandler={this.drawerToggleHandler}/>
          {backdrop}
          <Body>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/account' component={Account} />
              <Route path='/cart' component={Cart} />
              <Route path='/clothes' render={(props) => ( <ProductCategory category={'clothes'} /> )} />
              <Route path='/shoes' component={Shoes} category='shoes' />
              <Route path='/toys' render={(props) => ( <ProductCategory category={'toys'} /> )} />
              <Route component={NoMatch} />
            </Switch>
          </Body>
          <Footer />
        </Router>
     </>
    );
  }
}
  
export default App;
