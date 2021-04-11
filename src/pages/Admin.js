import React, {Component} from 'react';
import '../../src/assets/css/admin.css';
import { Storage, Auth, API, graphqlOperation } from 'aws-amplify';
import { AmplifyAuthenticator} from '@aws-amplify/ui-react';
import exports from '../aws-exports';
import { listProducts } from '../graphql/queries';
import { updateProduct } from '../graphql/mutations';
import CustomTable from '../components/Table/CustomTable';
import Circular from '../components/Loader/Circular';
import NotificationMessage from '../components/Notifications/Message';


class Admin extends Component {
    constructor(props) {
        super(props);
        this.isMountedVal = 0;
        this.state = {
            user: this.props.user,
            products: [],
            isLoading: false,
            image: null,
            progress: 0,
            showMessage: false,
            textMessage: '',
            colorMessage: undefined
        }
    }

    handleProductUpload = async (productId, imageFile) => {
        try{
            console.log('imagefile received for id: ', productId)
            console.log("imageFile received: ", imageFile)
    
            console.log("product add submit");
    
            const visibility = "public";
            const { identityId } = await Auth.currentCredentials()
            console.log("identityId: ", identityId)
            const filename = `${visibility}/${identityId}/${Date.now()}-${imageFile.name}`
            const uploadedFile = await Storage.put(filename, imageFile.file, {
                contentType: imageFile.type,
                progressCallback: progress => {
                    console.log(`Uploaded: ${progress.loaded}/${progress.total}`)
                    const percentUploaded = (progress.loaded / progress.total) * 100
                    this.setState({progress: percentUploaded})
                    console.log("percentUploaded: ", percentUploaded)
                }
            })
            const file = {
                key: uploadedFile.key,
                bucket: exports.aws_user_files_s3_bucket,
                region: exports.aws_project_region
            }
            console.log('file set: ', file);

            const updateResult = await this.updateProducts(productId, 'file', file)
            if (updateResult) {
                console.log("update success")
                this.setState({showMessage: true, textMessage: 'Success Updated', colorMessage: 'green'})
            } else {
                console.log("update not success")
                this.setState({showMessage: true, textMessage: 'Error Updated', colorMessage: 'red'})
            }
    
        } catch (err) {
            console.error("unable to create product: ", err)
            this.setState({ progress: 0 })
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

    /**
     * update the product object based on the productId given
     * @param {string} id - productId 
     * @param {string} attr - product attribute name
     * @param {any} value - any type of value
     * @returns 
     */
    updateProducts = async(id, attr, value) => {
        let inputData = {
            id: id,
        }

        switch (attr) {
            case 'enabled':
                inputData.enabled = value
                break
            case 'file':
                inputData.file = value
                break
            case 'price':
                inputData.price = parseFloat(value)
                break
            default:
                console.log('unknow attribute');
                return false
        }
        


        console.log("update input: ", inputData)
        try {
            this.setState({isLoading: true});
            const result = await API.graphql(graphqlOperation(updateProduct, {input: inputData}));
            const updatedProduct = result.data.updateProduct
            console.log('update result: ', updatedProduct)
            // update the state
            // copy the product array from the state into a temp object
            // let temp_state = this.state;
            let newProducts = this.state.products.map(product => ( product.id === updatedProduct.id ? updatedProduct : product ))
            this.setState(
                {
                    products: newProducts, 
                    isLoading: false,
                    showMessage: true, 
                    textMessage: 'Success Updated', 
                    colorMessage: 'green'
                })
           
            return true
            // console.log("newProduct = ", newProducts)


        } catch (err) {
            this.setState(
                {
                    isLoading: false,
                    showMessage: true,
                    textMessage: 'Error Updated',
                    colorMessage: 'red'
                });
            console.error(' error updating product: ', err)
            return false
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
        const {textMessage, colorMessage, showMessage, products} = this.state
        // const showMessage = this.state.showMessage
        console.log('products from state: ', products)
        return (
            <AmplifyAuthenticator>
            <h2>Admin page {username} </h2>
            {showMessage ? <NotificationMessage text={textMessage} color={colorMessage} /> : null}
            <div className="menu">
                {this.state.isLoading 
                ? (<Circular color="secondary" />) : null}
                {products.length > 0 
                ?
                (
                <div>
                <CustomTable data={products} 
                onCellChange={(oldValue, newValue, row, column) => this.onCellChange(oldValue, newValue, row, column)}
                uploadImage={(productId, imageFile) => this.handleProductUpload(productId, imageFile)}
                />
                </div>
                )
                : null}

            </div>
            </AmplifyAuthenticator>
        );
    }
}

export default Admin;