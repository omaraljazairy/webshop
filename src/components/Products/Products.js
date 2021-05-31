import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Container } from 'react-bootstrap';
import Pagination from '@material-ui/lab/Pagination';
import { API } from 'aws-amplify';
import { getProductByCatalog } from '../../graphql/queries';
import ProductCardV2 from '../Cards/ProductCardV2';
import Product from '../../datamodels/product';

const TOTAL_PRODUCT_PER_PAGE = 6
class Products extends Component {

  state = {
    pageNumber: 1,
    products: [],
    start: 0,
    end: TOTAL_PRODUCT_PER_PAGE,
    shoppingcart: []
  }

  componentDidMount() {
    this.handleFetchProductList();

  }

  handleFetchProductList = async () => { 

    const input = {
      catalogId: this.props.catalogId, // "9e600d71-34fa-4684-b6b7-88baba622ea8",
    }
    
    console.log("input: ", input)

    try {
      const productList = await API.graphql(
        {
          query: getProductByCatalog,
          variables: input,
          authMode: 'AWS_IAM'
        }
      );
      
      console.log("productList retrieved: ", productList.data)
      // convert the products from the databases to ProductDataModels and add them to a list.
      // create an emoty array to store the converted products
      const temp_productList = []
      productList.data.getProductByCatalog.items.forEach(element => {
        // add the converted products to the productList array
        temp_productList.push(Product.convertToProduct(element))
      });

      console.log("temp_productList: ", temp_productList)




      this.setState(
        {
          products: temp_productList  //productList.data.getProductByCatalog.items,
        }
      )
      
    } catch(err) {
      console.log("error fetching productList: ", err)
    }
  }

  handleChangePage(event, page) {
    console.log("handleChange even: ", event);
    console.log("handleChange page: ", page)
    const start = 0 ? page === 1 : ((page - 1) * TOTAL_PRODUCT_PER_PAGE)
    const end = page * TOTAL_PRODUCT_PER_PAGE
    this.setState(
      {
        pageNumber: page,
        start: start,
        end: end
      })
    this.handleFetchProductList()
  }

  handleShoppingCart(products) {
    console.log("products of shoppingcart received: ", products)
  }

  render() {
    const {products, start, end}  = this.state
    const totalProducts = products.length
    console.log("basePath received by page: ", this.props.basePath)
    // var startPage = 1
    // get the total products and use the Math.ceil to get the number of pages required
    var pages = Math.ceil(totalProducts / TOTAL_PRODUCT_PER_PAGE)
      return(
        <>
          <Container fluid>
              <Row>
            {products.slice(start, end).map((product, index )=> (
              <Col key={index} lg="4" md={{span: 3}}>
                <ProductCardV2
                index={index}
                shoppingcartEvent={(products) => this.handleShoppingCart(products)}
                basePath={this.props.basePath}
                product={product}
                />

              </Col>
            ))}
            </Row>
          </Container>
          <Pagination 
            count={pages} 
            variant="text" 
            color="primary" 
            onChange={(event, page) => this.handleChangePage(event, page)}
            
          />
        </>
      )
  }
}


Products.propTypes = {
  catalogId: PropTypes.string.isRequired,
  basePath: PropTypes.string.isRequired
}


export default Products;
