class Brand {
    /**
     * Brands of the products like Nike, Apple, etc.
     * @param {number} id internal id of the brand
     * @param {string} name external
     */
    constructor(id, name) {
        this.id = id;
        this.name = name
    }
}

export default Brand;