import React, { Component } from 'react';
import './App.css';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Header from './components/Headers/Header';
import Body  from './components/Body/Body';
import Footer from './components/Footers/Footer';
import Account from './pages/Account';
import { Cart } from './pages/Cart';
import Toys from './pages/Toys';
import Admin from './pages/Admin';
import Home from './pages/Home';
import DeletedAccount from './pages/DeletedAccount';
import Markets from './pages/Markets';
import ProductCategory from './pages/ProductCategory';
import { NoMatch } from './pages/NoMatch';
import SideDrawer from './components/SideDrawers/SideDrawer';
import Backdrop from './components/Backdrops/Backdrop';
import Container from '@material-ui/core/Container';
// import { Authenticator, AmplifyTheme } from 'aws-amplify-react';
import { Auth, Hub, API, graphqlOperation } from 'aws-amplify'
import { getCustomer } from './graphql/queries';
import { createCustomer } from './graphql/mutations';
import ReactNotification from 'react-notifications-component';

export const history = createBrowserHistory()
export const UserContext =  React.createContext()

class App extends Component {

  state = {
    sideDrawerOpen: false,
    user: null
  };

  componentDidMount() {
    console.log("component did mount in App")
    this.getUserData();
    Hub.listen('auth', this, 'onHubCapsule')
  }

  componentDidUpdate() {
    console.log("component did update in App")
  }

  getUserData = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser()
      console.log("current user: ", user)
      user ? this.setState({user}) : this.setState({user: null})
      // console.log("this status user: ", this.state.user)
    } catch(err) {
      console.log('no user returned: ', err)
    }
  }



  onHubCapsule = capsule => {
    console.log("capsule.payload: ", capsule.payload)
    switch(capsule.payload.event) {
      case "signIn":
        console.log('signed in')
        // this.registerNewUser(capsule.payload.data)
        this.registerNewCustomer(capsule.payload.data)
        this.getUserData()
        break;
      case "signUp":
        console.log('sign Up');
        
        break;
      case "signOut":
        console.log('signed out')
        this.setState({ user: null})
        break;
      default:
        return;
    }
  }



  /**
   * register a new customer user by taking the singedIdData form the Auth api.
   * @param {object} signedInData - user object from the Auth api
   */
  registerNewCustomer = async signedInData => {
    const getCustomerInput = {
      id: signedInData.signInUserSession.idToken.payload.sub
    }
    const { data } = await API.graphql(graphqlOperation(getCustomer, getCustomerInput))
    // if the customer is not found, than the customer hasn't been registered. so the customer will be saved in the db. 
    if (!data.getCustomer) {
      try {
        const registerCustomerInput = {
          ...getCustomerInput,
          username: signedInData.username,
          email: signedInData.signInUserSession.idToken.payload.email,
          phone_number: signedInData.signInUserSession.idToken.payload.phone_number
        }
        const result = await API.graphql(graphqlOperation(createCustomer, { input: registerCustomerInput} ));
        console.log('new customer registered: ', result);

      } catch(err) {
        console.error("Error registering the customer", err)
      }
    }

  }





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
    const {user} = this.state;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropToggleHandler} />;
    }
    console.log("state user from render: ", user)

    return (
      <>
      <UserContext.Provider value={{user: user}}>
        <Router history={history}>
          <Header drawerHandler={this.drawerToggleHandler}/>
          <SideDrawer show={this.state.sideDrawerOpen} drawerHandler={this.drawerToggleHandler}/>
          {backdrop}
          <Container maxWidth="md">
            <Body>
              <ReactNotification />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/confirm' component={DeletedAccount} />
                <Route path='/account' component={() => ( <Account user={user} /> )} />
                <Route path='/admin' component={() => ( <Admin user={user} /> )} />
                <Route path='/cart' component={Cart} />
                <Route path='/clothes' render={(props) => ( <ProductCategory category={'clothes'} /> )} />
                <Route path='/markets/:marketId' component={({ match }) => <Markets marketId={match.params.marketId} user={user} />} category='markets' />
                <Route path='/toys' component={Toys} />
                <Route component={NoMatch} />
              </Switch>
            </Body>
          </Container>
          <Footer />
        </Router>
      </UserContext.Provider>
     </>
    );
  }
}

// const theme = {
//   ...AmplifyTheme,
//   button: {
//     ...AmplifyTheme.button,
//     backgroundColor: red
//   }
// };

// export default withAuthenticator(App,  true, [], null );
export default App;