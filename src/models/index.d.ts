import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum OrderStatus {
  SUCCESS = "SUCCESS",
  PENDING = "PENDING",
  TERMINATED = "TERMINATED",
  FAILED = "FAILED"
}

export enum DeliveryStatus {
  DELIVERED = "DELIVERED",
  PENDING = "PENDING",
  CANCELLED = "CANCELLED"
}

export enum PaymentStatus {
  SUCCESS = "SUCCESS",
  PENDING = "PENDING",
  TERMINATED = "TERMINATED",
  FAILED = "FAILED"
}

export declare class Customer {
  readonly id: string;
  readonly fullName: string;
  readonly streetName: string;
  readonly postcode?: string;
  readonly city?: string;
  readonly province?: string;
  readonly housenr?: number;
  constructor(init: ModelInit<Customer>);
}

export declare class Catalog {
  readonly id: string;
  readonly name: string;
  constructor(init: ModelInit<Catalog>);
  static copyOf(source: Catalog, mutator: (draft: MutableModel<Catalog>) => MutableModel<Catalog> | void): Catalog;
}

export declare class Brand {
  readonly id: string;
  readonly name: string;
  constructor(init: ModelInit<Brand>);
  static copyOf(source: Brand, mutator: (draft: MutableModel<Brand>) => MutableModel<Brand> | void): Brand;
}

export declare class Product {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly imageUrl?: string;
  readonly price: number;
  readonly brandID: string;
  readonly brandName?: Brand;
  readonly catalogID: string;
  readonly catalogName?: Catalog;
  readonly rating?: number;
  readonly inStock: number;
  readonly gender?: string;
  readonly weight?: number;
  readonly updated: number;
  readonly size?: string;
  constructor(init: ModelInit<Product>);
  static copyOf(source: Product, mutator: (draft: MutableModel<Product>) => MutableModel<Product> | void): Product;
}