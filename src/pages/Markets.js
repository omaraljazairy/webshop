import React, { Component } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
// import { getMarket } from '../graphql/queries';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
// import Paper from '@material-ui/core/Paper';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
import { Tab, Tabs } from 'react-bootstrap';
import NewProduct from '../components/NewProduct';
import Product from '../components/Product'


const getMarket = `
query GetMarket($id: ID!) {
  getMarket(id: $id) {
    id
    name
    marketProducts {
      items {
        id
        description
        price
        shipped
        owner
        file {
            key
        }
        createdAt
        updatedAt
      }
      nextToken
    }
    tags
    owner
    createdAt
    updatedAt
  }
}
`;

class Markets extends Component {

    state = {
        market: null,
        isLoading: true,
        isMarketOwner: false
    }

    componentDidMount() {
        this.handleGetMarket();
        console.log("props user received: ", this.props.user)

    }

    handleGetMarket = async () => {
        
        const input = {
            id: this.props.marketId
        }

        const result = await API.graphql(graphqlOperation(getMarket, input))
        this.setState({market: result.data.getMarket, isLoading: false}, () => {this.handleMarketOwner() } )

        console.log("result from getMarket: ", result)
    }

    handleMarketOwner = () => {
        const { user } = this.props
        const { market } = this.state

        if (user) {
            this.setState({isMarketOwner: user.username === market.owner})
        }
    }


    render() {
        const { market, isLoading } = this.state
        

        return isLoading ? (
        <CircularProgress color="secondary" /> 
        ) : (
            <>
            <Link className="link" to="/toys">
              <Button variant="contained" color="primary">Back to the Market list</Button>
            </Link>
            <span>
                <h2>{market.name}</h2>
            </span>
            <span>
                <h3>{market.owner}</h3>
            </span>
            <div>
                <Tabs defaultActiveKey="1" id="noanim-tab-example">
                    <Tab eventKey="0" title="Add Product">
                        <NewProduct marketId={this.props.marketId}/>
                    </Tab>
                    <Tab eventKey="1" title="Product list">
                        
                        {market.marketProducts.items.map(product => (
                            // <div key={product.id}>
                                <Product key={product.id} product={product} />
                            // </div>
                        ))}
                        
                        
                    </Tab>
                </Tabs>
            </div>

            </>
        )

    }
};

export default Markets;

