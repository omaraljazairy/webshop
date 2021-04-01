import React, { Component } from 'react';
import {Form, Row, Col, ProgressBar } from 'react-bootstrap';
import { PhotoPicker } from 'aws-amplify-react';
import { Storage, Auth, API, graphqlOperation } from 'aws-amplify';
import Button from '@material-ui/core/Button';
import exports from '../aws-exports';
import { createMarketProduct } from '../graphql/mutations';

const initialState = {
    description: "",
    price: "",
    shipped: false,
    imagePreview: "",
    image: null,
    isUploading: false,
    progress: 0
};


class NewProduct extends Component {

    state = {
        ...initialState

    }

    handleAppProduct = async () => {
        try{

            console.log("product add submit");
            console.log("marketid: ", this.props.marketId)
            console.log(this.state);
            this.setState({ isUploading: true })

            const visibility = "public";
            const { identityId } = await Auth.currentCredentials()
            console.log("identityId: ", identityId)
            const filename = `${visibility}/${identityId}/${Date.now()}-${this.state.image.name}`
            const uploadedFile = await Storage.put(filename, this.state.image.file, {
                contentType: this.state.image.type,
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

            const input = {
                description: this.state.description,
                shipped: this.state.shipped,
                price: parseFloat(this.state.price),
                file: file,
                marketProductMarketId: this.props.marketId
                // productMarketId
            }

            const result = await API.graphql(graphqlOperation(createMarketProduct, { input }))
            console.log("result of upload product: ", result)
            
            this.setState({ ...initialState })
        
        } catch (err) {
            console.error("unable to create product: ", err)
        }
    }


    render(){
        const { description, price, image, shipped, imagePreview, progress } = this.state
        return (
            <>
            <h2>New Product</h2>
            {progress > 0 && (
                <ProgressBar animated now={progress} />
            )}
             <Form>
                <Form.Group as={Row} controlId="formHorizontalDescription">
                    <Form.Label column sm={2}>
                    Product Description
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control 
                      placeholder="Product Description" 
                      onChange={(event) => this.setState({description: event.target.value})}
                      value={description}
                    />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalPrice">
                    <Form.Label column sm={2}>
                    Product Price
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control 
                      placeholder="Product Price" 
                      onChange={(event) => this.setState({price: event.target.value})}
                      value={price}
                    />
                    </Col>
                </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>
                            Is the product Shipped ?
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Check
                            type="radio"
                            label="Shipped"
                            name="formHorizontalRadios"
                            id="shipped"
                            value="true"
                            checked={shipped === true}
                            onChange={() => this.setState({shipped: true})}
                            />
                            <Form.Check
                            type="radio"
                            label="Emailed"
                            name="formHorizontalRadios"
                            id="emailed"
                            value="false"
                            checked={shipped === false}
                            onChange={() => this.setState({shipped: false})}
                            />
                        </Col>
                    </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalPhoto">
                    <Col sm={10}>
                        {imagePreview && (
                            <img src={imagePreview}
                            alt="Product img preveiw"
                            />
                        )}
                        <PhotoPicker 
                        title="Product Image"
                        preview="hidden"
                        onLoad={url => this.setState({imagePreview: url})}
                        onPick={file => this.setState({image: file})}
                        // theme={{
                        //     formContainer: {
                        //         margin: 0,
                        //         padding: "0.8em"
                        //     },
                        //     sectionHeader: {
                        //         padding: "0.2em",
                        //         colo: "var(--darkAmazonOrange)"
                        //     }
                        // }}
                        
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalPrice">
                    <Button
                        color="primary"
                        variant="contained"
                        size="medium"
                        disabled={!image || !description || !price}
                        onClick={this.handleAppProduct}>
                            Add new Product
                        
                    </Button>
                </Form.Group>
            </Form> 
            </>
        )
    }
}

export default NewProduct;