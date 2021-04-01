import React, {Component} from 'react';
import '../../src/assets/css/admin.css';
import { API, graphqlOperation } from 'aws-amplify';
import { listProducts } from '../graphql/queries';
import { updateProduct } from '../graphql/mutations';
import CustomTable from '../components/Table/CustomTable';
import Circular from '../components/Loader/Circular';


class Admin extends Component {
    constructor(props) {
        super(props);
        this.isMountedVal = 0;
        this.state = {
            user: this.props.user,
            products: [],
            isLoading: false
        }
    }


    componentDidMount() {
        this.isMountedVal = 1
        this.fetchProducts()
    }

    componentWillUnmount() {
        this.isMountedVal = 0
    }

    fetchProducts = async () => {
        try {
            this.setState({isLoading: true});
            const products = await API.graphql(graphqlOperation(listProducts));
            console.log('products: ', products.data.listProducts.items);
            console.log('products length: ', products.data.listProducts.items.length)

            if (this.isMountedVal) {
                console.log('products length > 0 ')    
                this.setState({products: products.data.listProducts.items})
                this.setState({isLoading: false});
            } 
        }
        catch(err) {
            console.error('errpr fetching products: ', err);
            this.setState({isLoading: false});
        }
    }

    updateProducts = async(id, attr, value) => {
        let inputDate = {
            id: id,
        }
        if (attr === 'enabled') {
            inputDate.enabled = value
        } else {
            console.log('unknow attribute');
            return
        }

        console.log("update input: ", inputDate)
        try {
            const result = await API.graphql(graphqlOperation(updateProduct, {input: inputDate}));
            const updatedProduct = result.data.updateProduct
            console.log('update result: ', updatedProduct)
            // update the state
            // copy the product array from the state into a temp object
            // let temp_state = this.state;
            let newProducts = this.state.products.map(product => ( product.id === updatedProduct.id ? updatedProduct : product ))
            this.setState({products: newProducts})
            // console.log("newProduct = ", newProducts)


        } catch (err) {
            console.error(' error updating product: ', err)
        }
        

    }

    onCellChange(oldValue, newValue, row, column) {
        // console.log('value from onCellEdit oldValue: ', oldValue);
        console.log('value from onCellEdit newValue: ', newValue);
        console.log('value from onCellEdit row: ', row.id);
        console.log('value from onCellEdit column: ', column.dataField);
        this.updateProducts(row.id, column.dataField, newValue)

    }

    render() {
        const username = this.state.user ? this.state.user.username : null;
        const products = this.state.products
        console.log('products from state: ', products)
        return (
            <>
            <h2>Admin page {username} </h2>
            <div className="menu">
                {this.state.isLoading ? (<Circular color="secondary" />) : null}
                {products.length > 0 
                ?
                (
                <div>
                <h2>{products[0].id}</h2>
                <CustomTable data={products} 
                onCellChange={(oldValue, newValue, row, column) => this.onCellChange(oldValue, newValue, row, column)}
                />
                </div>
                )
                : null}

            </div>
            </>
        );
    }
}

export default Admin;