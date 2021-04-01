class Product {
    /**
     * The Product object is created by providing the name, image, price, brand and ratings.
     * @param {string} name the product name.
     * @param {image} image the full image path.
     * @param {number} price the tariff of the product.
     * @param {string} brandName main brand of the product.
     * @param {number} ratings number of ratings for the product.
     * @param {string} description description of the product
     * @param {number} stock number of items in the stock available
     * @param {string} gender 
     * @param {string} externalItemId the id of the item on the provider side
     * @param {string} catalog catalog name
     * @param {number} wieght 
     * @param {number} size 
     */
    constructor(name, image, price, brandName, ratings, description, stock, gender, externalItemId, catalog, wieght, size) {
        this.name = name;
        this.image = image;
        this.price = price;
        this.brandName = brandName;
        this.ratings = ratings;
        this.description = description;
        this.stock = stock;
        this.gender = gender;
        this.externalItemId = externalItemId;
        this.catalog = catalog;
        this.wieght = wieght;
        this.size = size;

    }
}

export default Product;
