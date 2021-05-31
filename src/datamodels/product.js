import Brand from './brand';
import Catalog from './catalog';
import { dateFormatterFromAWS } from '../services/converters';

class Product {
    /**
     * The Product object is created by providing the name, image, price, brand and ratings.
     * @param {string} id the id of the item on the provider side
     * @param {Catalog} catalog the catalog of the product.
     * @param {image} image the full image path.
     * @param {number} price the tariff of the product.
     * @param {Brand} brand main brand of the product.
     * @param {number} ratings number of ratings for the product.
     * @param {string} description description of the product
     * @param {number} stock number of items in the stock available
     * @param {string} gender 
     * @param {number} weight 
     * @param {number} size 
     * @param {string} supplier the supplier of the product
     * @param {bool} enabled true if enabled, anything else is false
     * @param {string} created the creation datetime of the product
     * @param {string} updated the last updated datetime of the product
     */
    constructor(id, brand, catalog, created, description, enabled, gender, image, price, ratings, size, stock, supplier, updated, weight) {
        
        this.id = id;
        this.brand = brand;
        this.catalog = catalog;
        this.created = created;
        this.description = description;
        this.enabled = enabled
        this.gender = gender;
        this.image = image;
        this.price = price;
        this.ratings = ratings;
        this.size = size;
        this.stock = stock;
        this.supplier = supplier
        this.updated = updated;
        this.weight = weight;
    }


    /**
     * convert the graphql product object to a product model.
     * @param {object} productData product object from aws graphql
     * @returns Product object
     */
    static convertToProduct (productData) {
        let id = productData.id
        let brand = new Brand(productData.brand.id, productData.brand.name)
        let catalog = new Catalog(productData.catalog.id, productData.catalog.name)
        let created = dateFormatterFromAWS(productData.createdAt, 'toString') 
        let description = productData.description
        let enabled = productData.enabled !== true ? false : true
        let gender = 'male'
        let image = productData.file !== null ? productData.file.key : productData.imageUrl
        let price = productData.price
        let ratings = Math.floor(Math.random() * 5) + 1 // put a random number for now
        let size = 1
        let stock = productData.stock
        let supplier = productData.supplier
        let updated = dateFormatterFromAWS(productData.updatedAt, 'toString') 
        let weight = productData.weight

        // create the product object and return it
        let product = new Product(
            id,
            brand,
            catalog,
            created,
            description,
            enabled,
            gender,
            image,
            price,
            ratings,
            size,
            stock,
            supplier,
            updated,
            weight
        )

        console.log("product object created: ", product)

        return product


        // {
        //     "id": "109080",
        //     "description": "CREMA DEPILATORIA piel sensible 200 ml",
        //     "brandId": "1109",
        //     "catalogId": "d2467e35-a5a0-4d99-8894-a05542cde161",
        //     "price": 4.69,
        //     "stock": 116,
        //     "weight": 0.247,
        //     "imageUrl": "https://webshop.fedal.net/images/higiene.jpg",
        //     "file": null,
        //     "supplier": "NovaEngels",
        //     "enabled": null,
        //     "createdAt": "2021-04-24T22:27:27.162Z",
        //     "updatedAt": "2021-04-24T22:27:27.162Z",
        //     "brand": {
        //       "id": "1109",
        //       "name": "VEET",
        //       "createdAt": "2020-12-18T21:19:30.320Z",
        //       "updatedAt": "2020-12-18T21:19:30.320Z"
        //     },
        //     "catalog": {
        //       "id": "d2467e35-a5a0-4d99-8894-a05542cde161",
        //       "name": "Higiene",
        //       "createdAt": "2020-12-18T22:21:18.908Z",
        //       "updatedAt": "2020-12-18T22:21:18.908Z"
        //     }
        //   }

    }
}

export default Product;


// export function convertToProduct (productData) {
//     let id = productData.id
//     let brand = Brand(productData.brand.id, productData.brand.name)
//     let catalog = Catalog(productData.catalog.id, productData.catalog.name)
//     let created = productData.created
//     let description = productData.description
//     let enabled = productData.enabled !== true ? false : true
//     let gender = 'male'
//     let image = productData.file !== null ? productData.file.key : productData.imageUrl
//     let price = productData.price
//     let ratings = Math.floor(Math.random() * 5) + 1 // put a random number for now
//     let size = 1
//     let stock = productData.stock
//     let supplier = productData.supplier
//     let updated = productData.updated
//     let weight = productData.weight
   
//     // create the product object and return it
//     let product = new Product(
//         id,
//         brand,
//         catalog,
//         created,
//         description,
//         enabled,
//         gender,
//         image,
//         price,
//         ratings,
//         size,
//         stock,
//         supplier,
//         updated,
//         weight
//     )

//     console.log("product object created: ", product)

//     return product
