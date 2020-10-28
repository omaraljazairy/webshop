class Product {
    /**
     * The Product object is created by providing the name, image, price, brand and ratings.
     * @param {string} name the product name.
     * @param {image} image the full image path.
     * @param {number} price the tariff of the product.
     * @param {string} brand main brand of the product.
     * @param {number} ratings number of ratings for the product.
     */
    constructor(name, image, price, brand, ratings) {
        this.name = name;
        this.image = image;
        this.price = price;
        this.brand = brand;
        this.ratings = ratings;
    }
}

export default Product;