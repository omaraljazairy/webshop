import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Headers/Header';
import Body  from './components/Body/Body';
import Footer from './components/Footers/Footer';
import { Account } from './pages/Account';
import { Cart } from './pages/Cart';
import { Clothes } from './pages/Clothes';
import { Home } from './pages/Home';
import { ProductCategory } from './pages/ProductCategory';
import { Shoes } from './pages/Shoes';
import { Toys } from './pages/Toys';
import { NoMatch } from './pages/NoMatch';

class App extends Component {

  render() {
    return (
      <>
        <Router>
          <Header/>
          <Body>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/account' component={Account} />
              <Route path='/cart' component={Cart} />
              <Route path='/clothes' component={Clothes} />
              <Route path='/productcategory' component={ProductCategory} />
              <Route path='/shoes' component={Shoes} />
              <Route path='/toys' component={Toys} />
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
