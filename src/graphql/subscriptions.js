/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote($owner: String!) {
    onCreateNote(owner: $owner) {
      id
      note
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote($owner: String!) {
    onUpdateNote(owner: $owner) {
      id
      note
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote($owner: String!) {
    onDeleteNote(owner: $owner) {
      id
      note
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateMarket = /* GraphQL */ `
  subscription OnCreateMarket {
    onCreateMarket {
      id
      name
      marketProducts {
        items {
          id
          description
          price
          shipped
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      tags
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMarket = /* GraphQL */ `
  subscription OnUpdateMarket {
    onUpdateMarket {
      id
      name
      marketProducts {
        items {
          id
          description
          price
          shipped
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      tags
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMarket = /* GraphQL */ `
  subscription OnDeleteMarket {
    onDeleteMarket {
      id
      name
      marketProducts {
        items {
          id
          description
          price
          shipped
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      tags
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateMarketProduct = /* GraphQL */ `
  subscription OnCreateMarketProduct($owner: String!) {
    onCreateMarketProduct(owner: $owner) {
      id
      description
      market {
        id
        name
        marketProducts {
          nextToken
        }
        tags
        owner
        createdAt
        updatedAt
      }
      file {
        bucket
        region
        key
      }
      price
      shipped
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMarketProduct = /* GraphQL */ `
  subscription OnUpdateMarketProduct($owner: String!) {
    onUpdateMarketProduct(owner: $owner) {
      id
      description
      market {
        id
        name
        marketProducts {
          nextToken
        }
        tags
        owner
        createdAt
        updatedAt
      }
      file {
        bucket
        region
        key
      }
      price
      shipped
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMarketProduct = /* GraphQL */ `
  subscription OnDeleteMarketProduct($owner: String!) {
    onDeleteMarketProduct(owner: $owner) {
      id
      description
      market {
        id
        name
        marketProducts {
          nextToken
        }
        tags
        owner
        createdAt
        updatedAt
      }
      file {
        bucket
        region
        key
      }
      price
      shipped
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer($username: String) {
    onCreateCustomer(username: $username) {
      id
      username
      email
      name
      shippingAddress {
        city
        country
        address_line1
        address_state
        address_zip
      }
      phoneNumber
      locale
      phone_number
      createdAt
      updatedAt
      orders {
        items {
          id
          sessionId
          status
          cartIds
          totalPrice
          statusDescription
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer($username: String) {
    onUpdateCustomer(username: $username) {
      id
      username
      email
      name
      shippingAddress {
        city
        country
        address_line1
        address_state
        address_zip
      }
      phoneNumber
      locale
      phone_number
      createdAt
      updatedAt
      orders {
        items {
          id
          sessionId
          status
          cartIds
          totalPrice
          statusDescription
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer($username: String) {
    onDeleteCustomer(username: $username) {
      id
      username
      email
      name
      shippingAddress {
        city
        country
        address_line1
        address_state
        address_zip
      }
      phoneNumber
      locale
      phone_number
      createdAt
      updatedAt
      orders {
        items {
          id
          sessionId
          status
          cartIds
          totalPrice
          statusDescription
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
      id
      description
      brandId
      catalogId
      brand {
        id
        name
        createdAt
        updatedAt
      }
      catalog {
        id
        name
        createdAt
        updatedAt
      }
      price
      stock
      weight
      imageUrl
      file {
        bucket
        region
        key
      }
      supplier
      enabled
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
      id
      description
      brandId
      catalogId
      brand {
        id
        name
        createdAt
        updatedAt
      }
      catalog {
        id
        name
        createdAt
        updatedAt
      }
      price
      stock
      weight
      imageUrl
      file {
        bucket
        region
        key
      }
      supplier
      enabled
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
      id
      description
      brandId
      catalogId
      brand {
        id
        name
        createdAt
        updatedAt
      }
      catalog {
        id
        name
        createdAt
        updatedAt
      }
      price
      stock
      weight
      imageUrl
      file {
        bucket
        region
        key
      }
      supplier
      enabled
      createdAt
      updatedAt
    }
  }
`;
export const onCreateBrand = /* GraphQL */ `
  subscription OnCreateBrand {
    onCreateBrand {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateBrand = /* GraphQL */ `
  subscription OnUpdateBrand {
    onUpdateBrand {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBrand = /* GraphQL */ `
  subscription OnDeleteBrand {
    onDeleteBrand {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCatalog = /* GraphQL */ `
  subscription OnCreateCatalog {
    onCreateCatalog {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCatalog = /* GraphQL */ `
  subscription OnUpdateCatalog {
    onUpdateCatalog {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCatalog = /* GraphQL */ `
  subscription OnDeleteCatalog {
    onDeleteCatalog {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
      id
      sessionId
      customer {
        id
        username
        email
        name
        shippingAddress {
          city
          country
          address_line1
          address_state
          address_zip
        }
        phoneNumber
        locale
        phone_number
        createdAt
        updatedAt
        orders {
          nextToken
        }
      }
      status
      cartIds
      totalPrice
      statusDescription
      createdAt
      updatedAt
      session {
        id
        ipaddress
        userAgent
        createdAt
        updatedAt
      }
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
      id
      sessionId
      customer {
        id
        username
        email
        name
        shippingAddress {
          city
          country
          address_line1
          address_state
          address_zip
        }
        phoneNumber
        locale
        phone_number
        createdAt
        updatedAt
        orders {
          nextToken
        }
      }
      status
      cartIds
      totalPrice
      statusDescription
      createdAt
      updatedAt
      session {
        id
        ipaddress
        userAgent
        createdAt
        updatedAt
      }
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
      id
      sessionId
      customer {
        id
        username
        email
        name
        shippingAddress {
          city
          country
          address_line1
          address_state
          address_zip
        }
        phoneNumber
        locale
        phone_number
        createdAt
        updatedAt
        orders {
          nextToken
        }
      }
      status
      cartIds
      totalPrice
      statusDescription
      createdAt
      updatedAt
      session {
        id
        ipaddress
        userAgent
        createdAt
        updatedAt
      }
    }
  }
`;
export const onCreateCountry = /* GraphQL */ `
  subscription OnCreateCountry {
    onCreateCountry {
      id
      code
      name
      zone
      shippingDays
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCountry = /* GraphQL */ `
  subscription OnUpdateCountry {
    onUpdateCountry {
      id
      code
      name
      zone
      shippingDays
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCountry = /* GraphQL */ `
  subscription OnDeleteCountry {
    onDeleteCountry {
      id
      code
      name
      zone
      shippingDays
      createdAt
      updatedAt
    }
  }
`;
export const onCreateWeightZoneTariff = /* GraphQL */ `
  subscription OnCreateWeightZoneTariff {
    onCreateWeightZoneTariff {
      id
      zone
      max
      min
      tariff
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateWeightZoneTariff = /* GraphQL */ `
  subscription OnUpdateWeightZoneTariff {
    onUpdateWeightZoneTariff {
      id
      zone
      max
      min
      tariff
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteWeightZoneTariff = /* GraphQL */ `
  subscription OnDeleteWeightZoneTariff {
    onDeleteWeightZoneTariff {
      id
      zone
      max
      min
      tariff
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSessions = /* GraphQL */ `
  subscription OnCreateSessions {
    onCreateSessions {
      id
      ipaddress
      userAgent
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSessions = /* GraphQL */ `
  subscription OnUpdateSessions {
    onUpdateSessions {
      id
      ipaddress
      userAgent
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSessions = /* GraphQL */ `
  subscription OnDeleteSessions {
    onDeleteSessions {
      id
      ipaddress
      userAgent
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCart = /* GraphQL */ `
  subscription OnCreateCart {
    onCreateCart {
      id
      sessionId
      productId
      product {
        id
        description
        brandId
        catalogId
        brand {
          id
          name
          createdAt
          updatedAt
        }
        catalog {
          id
          name
          createdAt
          updatedAt
        }
        price
        stock
        weight
        imageUrl
        file {
          bucket
          region
          key
        }
        supplier
        enabled
        createdAt
        updatedAt
      }
      quantity
      totalPrice
      createdAt
      updatedAt
      session {
        id
        ipaddress
        userAgent
        createdAt
        updatedAt
      }
    }
  }
`;
export const onUpdateCart = /* GraphQL */ `
  subscription OnUpdateCart {
    onUpdateCart {
      id
      sessionId
      productId
      product {
        id
        description
        brandId
        catalogId
        brand {
          id
          name
          createdAt
          updatedAt
        }
        catalog {
          id
          name
          createdAt
          updatedAt
        }
        price
        stock
        weight
        imageUrl
        file {
          bucket
          region
          key
        }
        supplier
        enabled
        createdAt
        updatedAt
      }
      quantity
      totalPrice
      createdAt
      updatedAt
      session {
        id
        ipaddress
        userAgent
        createdAt
        updatedAt
      }
    }
  }
`;
export const onDeleteCart = /* GraphQL */ `
  subscription OnDeleteCart {
    onDeleteCart {
      id
      sessionId
      productId
      product {
        id
        description
        brandId
        catalogId
        brand {
          id
          name
          createdAt
          updatedAt
        }
        catalog {
          id
          name
          createdAt
          updatedAt
        }
        price
        stock
        weight
        imageUrl
        file {
          bucket
          region
          key
        }
        supplier
        enabled
        createdAt
        updatedAt
      }
      quantity
      totalPrice
      createdAt
      updatedAt
      session {
        id
        ipaddress
        userAgent
        createdAt
        updatedAt
      }
    }
  }
`;
export const onCreateOrderShipment = /* GraphQL */ `
  subscription OnCreateOrderShipment {
    onCreateOrderShipment {
      id
      orderId
      tracking
      expedition
      carrier
      trackingURL
      status
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateOrderShipment = /* GraphQL */ `
  subscription OnUpdateOrderShipment {
    onUpdateOrderShipment {
      id
      orderId
      tracking
      expedition
      carrier
      trackingURL
      status
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteOrderShipment = /* GraphQL */ `
  subscription OnDeleteOrderShipment {
    onDeleteOrderShipment {
      id
      orderId
      tracking
      expedition
      carrier
      trackingURL
      status
      createdAt
      updatedAt
    }
  }
`;
export const onCreateOrderPayment = /* GraphQL */ `
  subscription OnCreateOrderPayment {
    onCreateOrderPayment {
      id
      orderId
      status
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateOrderPayment = /* GraphQL */ `
  subscription OnUpdateOrderPayment {
    onUpdateOrderPayment {
      id
      orderId
      status
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteOrderPayment = /* GraphQL */ `
  subscription OnDeleteOrderPayment {
    onDeleteOrderPayment {
      id
      orderId
      status
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreateEvents = /* GraphQL */ `
  subscription OnCreateEvents {
    onCreateEvents {
      id
      orderId
      type
      status
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateEvents = /* GraphQL */ `
  subscription OnUpdateEvents {
    onUpdateEvents {
      id
      orderId
      type
      status
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteEvents = /* GraphQL */ `
  subscription OnDeleteEvents {
    onDeleteEvents {
      id
      orderId
      type
      status
      description
      createdAt
      updatedAt
    }
  }
`;
