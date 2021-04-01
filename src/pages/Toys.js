import React, {Component} from 'react';
import { API, graphqlOperation } from 'aws-amplify';
// import { searchMarkets } from '../graphql/queries';
import MarketList from '../components/MarketList';
import NewMarket from '../components/NewMarket';
import Divider from '@material-ui/core/Divider';


class Toys extends Component {

    state = {
        searchTerm: "",
        searchResults: [],
        isSearching: false
    };

    handleSearchChange = searchTerm => { 
        this.setState({ searchTerm })
        console.log("searchTerm: ", searchTerm)
    } 

    handleClearSearch = () => this.setState({ searchTerm: "", searchResults: [] })

    // handleSearch = async event => {
    //     console.log("handleSearch is invoked with term: ", this.state.searchTerm)
    //     try {
    //         event.preventDefault() 
    //         const result = await API.graphql(graphqlOperation(searchMarkets, {
    //             filter: {
    //                 or: [
    //                     { name: { match: this.state.searchTerm }},
    //                     { owner: { match: this.state.searchTerm }},
    //                     { tags: { match: this.state.searchTerm }}
    //                 ]
    //             }
    //             // ,
    //             // sort: {direction: "asc", field: "createdAt"}
    //         }))
    //         console.log("result from search")
    //         console.log("result: ", result)
    //         this.setState({
    //             searchResults: result.data.searchMarkets.items,
    //             isSearching: false
    //         })
    //         console.log("searchResults: ", this.state.searchResults)
            
    //     } catch(err) {
    //         console.error("fetching data: ", err)
    //     }


    //     console.log(this.state.searchTerm)
    //     console.log("event searchHandle: ", this.state.searchTerm)

    // }


    render() {
        return (
            <div align="center">
            <NewMarket  
              isSearching={this.state.isSearching}
              searchTerm={this.state.searchTerm}
              handleSearchChange={this.handleSearchChange}
              handleClearSearch={this.handleClearSearch}
            //   handleSearch={this.handleSearch}
            />
            <Divider light />
            <MarketList searchResults={this.state.searchResults} />
        </div>
        )
    }
}

export default Toys;
