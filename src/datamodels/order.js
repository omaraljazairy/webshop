class Order {

    constructor(id, status, customerId, products, totalCost, deliveryStatus, paymentStatus, orderDate, lastEventDate) {
        this.id = id;
        this.status = status;
        this.customerId = customerId;
        this.products = products;
        this.totalCost = totalCost;
        this.deliveryStatus = deliveryStatus;
        this.paymentStatus = paymentStatus;
        this.orderDate = orderDate;
        this.lastEventDate = lastEventDate;
    }
}

export default Order;