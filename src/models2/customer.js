class Customer {
    /**
     * 
     * @param {number} id the unique generated id of the customer.
     * @param {string} fullname the full name of the customer.
     * @param {string} streetName street name needed for the delivery
     * @param {string} postcode needed for the delivery
     * @param {string} city needed for the delivery
     * @param {string} province needed for the delivery
     * @param {string} housenr needed for the delivery
     */
    constructor(id, fullname, streetName, postcode, city, province, housenr) {
        this.id = id;
        this.fullname = fullname;
        this.streetName= streetName;
        this.postcode = postcode;
        this.city = city;
        this.province = province;
        this.housenr = housenr;
    }
}

export default Customer;