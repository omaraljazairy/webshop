import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Dialog } from '@material-ui/core';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Snackbar from '@material-ui/core/Snackbar';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import Alert  from '@material-ui/lab/Alert';
import { API, graphqlOperation } from 'aws-amplify'
import { createMarket } from '../graphql/mutations';
import { UserContext } from '../App';
import {Form} from 'react-bootstrap';

class NewMarket extends Component{
    state = {
        addMarketDialog: false,
        name: "",
        error: false,
        owner: "",
        tags: ["Arts", "Web Dev"]
    }

    handleAddMarket = async (user) => {
        try {
            console.log("state name: ", this.state.name);
            console.log("state name: ", user.username);

            this.setState(
                { 
                    addMarketDialog: false,
                    owner: user.username
                })

            const input = {
                name: this.state.name,
                owner: user.username,
                tags: this.state.tags
            };
            console.log("input object: ", input)
            const result = await API.graphql(graphqlOperation(createMarket, { input }))
            console.info("Created market: id ", result.data.createMarket)
            this.setState({name: ""})
        } catch (error) {
            this.setState({error: true})
            console.error("Error creating market: ", error)
        }

    }

    handleName = (newName) => {
        console.log("newName received: ", newName)
        // console.log("username: ", user.username)
        this.setState({name: newName})
    }

    handleClose = () => {
        this.setState({
            addMarketDialog: false,
            error: false
        })
    }

    handleError = () => {
        this.setState({
            error: true
        })
    }


    render() {
        return (
            <UserContext.Consumer>
                {({user}) =>  
            <>
            { user ? console.log(user.username) : "no user" }
                <div>
                  <h1>Create Your MarketPlace for user { user ? user.username : "no user" } </h1>
                  
                  <Button
                        color="primary"
                        variant="contained"
                        size="medium"
                        onClick={() => this.setState({ addMarketDialog: true })}>
                      Add new market
                    </Button>
                </div>
                <p></p>
                <div align="center">
                <Form inline name="Search" onSubmit={this.props.handleSearch}>
                    {/* <Form.Row> */}
                        {/* <Form.Group as={Col} controlId="formGridSearch"> */}
                        <Form.Control 
                            placeholder="Search Catalog" 
                            onChange={(event) => this.props.handleSearchChange(event.target.value)}
                            onClick={this.props.handleSearch}
                            />
                        {/* </Form.Group> */}

                        {/* <Form.Group as={Col} controlId="formGridSubmitBtn"> */}
                            <Button 
                                variant="outlined" 
                                color="primary" 
                                endIcon={<Icon>search</Icon>}
                                onClick={this.props.handleSearch}
                            > Search
                            </Button>
                        {/* </Form.Group> */}
                    {/* </Form.Row> */}
                </Form>

                    {/* <form name="Search" onSubmit={this.props.handleSearch}>
                        <TextField 
                          id="input-with-icon-grid" 
                          label="Search" 
                          onChange={(event) => this.props.handleSearchChange(event.target.value)}
                          onClick={this.props.handleClearSearch}
                          />
                        <Button 
                        variant="outlined" 
                        color="primary" 
                        endIcon={<Icon>search</Icon>}
                        onClick={this.props.handleSearch}
                        > Search
                        </Button>
                    </form> */}
                </div>


              <p></p>
              <Dialog open={this.state.addMarketDialog} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add a new Market</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Add a new market to be sold online. It is over over over. 
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="New Market"
                        type="email"
                        fullWidth
                        onChange={event => this.handleName(event.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => this.handleAddMarket(user)} color="primary">
                        Add
                    </Button>
                    <Button onClick={this.handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
             </Dialog>
             <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={this.state.error}
                onClose={this.handleError}
                autoHideDuration={10}
                // message="I love snacks"
                // key={'top'}
                >
                <Alert onClose={this.handleClose} severity="error">
                   This is a success message!
                </Alert>
            </Snackbar>
      
            </>}
            </UserContext.Consumer>
        )
    }
}

export default NewMarket;