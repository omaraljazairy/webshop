// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const OrderStatus = {
  "SUCCESS": "SUCCESS",
  "PENDING": "PENDING",
  "TERMINATED": "TERMINATED",
  "FAILED": "FAILED"
};

const DeliveryStatus = {
  "DELIVERED": "DELIVERED",
  "PENDING": "PENDING",
  "CANCELLED": "CANCELLED"
};

const PaymentStatus = {
  "SUCCESS": "SUCCESS",
  "PENDING": "PENDING",
  "TERMINATED": "TERMINATED",
  "FAILED": "FAILED"
};

const { Catalog, Brand, Product, Customer } = initSchema(schema);

export {
  Catalog,
  Brand,
  Product,
  OrderStatus,
  DeliveryStatus,
  PaymentStatus,
  Customer
};