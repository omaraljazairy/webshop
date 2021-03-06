import React, { Component, Suspense } from 'react';
import './App.css';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Header from './components/Headers/Header';
import Body  from './components/Body/Body';
import Footer from './components/Footers/Footer';
import Account from './pages/Account';
import { Cart } from './pages/Cart';
import Home from './pages/Home';
import Hair from './pages/Hair';
import Admin from './pages/Admin';
import Hygiene from './pages/Hygiene';
import DeletedAccount from './pages/DeletedAccount';
import Perfume from './pages/Perfume';
import Suncare from './pages/Suncare';
import Makeup from './pages/Makeup';
// import ProductDetails from './pages/'
import { NoMatch } from './pages/NoMatch';
import SideDrawer from './components/SideDrawers/SideDrawer';
import Backdrop from './components/Backdrops/Backdrop';
import Container from '@material-ui/core/Container';
// import { Authenticator, AmplifyTheme } from 'aws-amplify-react';
import { Auth, Hub, API, graphqlOperation } from 'aws-amplify'
import { getCustomer, getSessions } from './graphql/queries';
import { createCustomer, createSessions } from './graphql/mutations';
import ReactNotification from 'react-notifications-component';
import { withNamespaces } from 'react-i18next';
import { storeSession, storeIp, storeUserAgent } from './services/localstorge';

export const history = createBrowserHistory()
export const UserContext =  React.createContext()

class App extends Component {

  state = {
    sideDrawerOpen: false,
    user: null,
  };

  componentDidMount() {
    console.log("component did mount in App")
    this.setUserSessionInfo()
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

  // getUserIp = async () => {

  // }


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
   * save the session with the ipaddress and useragent of the user when they are created and 
   * stored in the localStorage. 
   */
  setUserSessionInfo = async () => {
    // call the localStorage functions to store the session, ipaddress and useragent.
    const storedSession = storeSession();
    const storedUserAgent = storeUserAgent();
    const storedIp = await storeIp();
    console.log("finished storage in localstorage");
    
    // get the sessionid stored in the localstorage 
    
    console.log("storedSession: ", storedSession);
    console.log("storedIp: ", storedIp);
    console.log("storedUserAgent: ", storedUserAgent);

    // check if the session is already stored in the database.
    const getSessionInput = {
      id: storedSession
    }
    console.log("getSessionInput: ", getSessionInput);
    
    try {
      const sessionData = await API.graphql(
        {
          query: getSessions,
          variables: getSessionInput,
          authMode: 'AWS_IAM'
        }
      );
      console.log('sessionData: ', sessionData.data.getSessions)
           // if the session doesn't exist, save it with the useragent and ipaddress
        if (!sessionData.data.getSessions) {
          const sessionsInput = {
            id: storedSession,
            ipaddress: storedIp,
            userAgent: storedUserAgent
          }

          try {
            const result  = await API.graphql(
              {
                query: createSessions,
                variables: {input: sessionsInput},
                authMode: 'AWS_IAM',
              }
            )
            console.log("session created: ", result);
          } catch (err) {
            console.error('unable to save session data: ', err);
          }
        }
    } catch (err) {
      console.error("sessiondata error: ", err)
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
    // const { t, I18n } = useTranslation();

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropToggleHandler} />;
    }
    console.log("state user from render: ", user)

    return (
      <>
      <Suspense fallback="loading">
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
                <Route exact path='/hair' component={Hair} />
                <Route exact path='/confirm' component={DeletedAccount} />
                <Route path='/account' component={() => ( <Account user={user} /> )} />
                <Route path='/admin' component={() => ( <Admin user={user} /> )} />
                <Route path='/cart' component={Cart} />
                <Route path='/hygiene' component={Hygiene} />
                <Route path='/perfume' component={Perfume} />
                <Route path='/suncare' component={Suncare} />
                <Route path='/makeup' component={Makeup} />

                {/* <Route path='/clothes' render={(props) => ( <ProductCategory category={'clothes'} /> )} />
                <Route path='/markets/:marketId' component={({ match }) => <Markets marketId={match.params.marketId} user={user} />} category='markets' /> */}
                
                <Route component={NoMatch} />
              </Switch>
            </Body>
          </Container>
          <Footer />
        </Router>
      </UserContext.Provider>
      </Suspense>
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
// export default App;
export default withNamespaces()(App);