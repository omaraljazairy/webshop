/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
      id
      note
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
      id
      note
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
      id
      note
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createMarket = /* GraphQL */ `
  mutation CreateMarket(
    $input: CreateMarketInput!
    $condition: ModelMarketConditionInput
  ) {
    createMarket(input: $input, condition: $condition) {
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
export const updateMarket = /* GraphQL */ `
  mutation UpdateMarket(
    $input: UpdateMarketInput!
    $condition: ModelMarketConditionInput
  ) {
    updateMarket(input: $input, condition: $condition) {
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
export const deleteMarket = /* GraphQL */ `
  mutation DeleteMarket(
    $input: DeleteMarketInput!
    $condition: ModelMarketConditionInput
  ) {
    deleteMarket(input: $input, condition: $condition) {
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
export const createMarketProduct = /* GraphQL */ `
  mutation CreateMarketProduct(
    $input: CreateMarketProductInput!
    $condition: ModelMarketProductConditionInput
  ) {
    createMarketProduct(input: $input, condition: $condition) {
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
export const updateMarketProduct = /* GraphQL */ `
  mutation UpdateMarketProduct(
    $input: UpdateMarketProductInput!
    $condition: ModelMarketProductConditionInput
  ) {
    updateMarketProduct(input: $input, condition: $condition) {
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
export const deleteMarketProduct = /* GraphQL */ `
  mutation DeleteMarketProduct(
    $input: DeleteMarketProductInput!
    $condition: ModelMarketProductConditionInput
  ) {
    deleteMarketProduct(input: $input, condition: $condition) {
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
export const registerUser = /* GraphQL */ `
  mutation RegisterUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    registerUser(input: $input, condition: $condition) {
      id
      username
      email
      registered
      orders {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      email
      registered
      orders {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createMarketOrder = /* GraphQL */ `
  mutation CreateMarketOrder(
    $input: CreateMarketOrderInput!
    $condition: ModelMarketOrderConditionInput
  ) {
    createMarketOrder(input: $input, condition: $condition) {
      id
      user {
        id
        username
        email
        registered
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      marketproduct {
        id
        description
        market {
          id
          name
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
      shippingAddress {
        city
        country
        address_line1
        address_state
        address_zip
      }
      createdAt
      updatedAt
    }
  }
`;
export const createCountry = /* GraphQL */ `
  mutation CreateCountry(
    $input: CreateCountryInput!
    $condition: ModelCountryConditionInput
  ) {
    createCountry(input: $input, condition: $condition) {
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
export const updateCountry = /* GraphQL */ `
  mutation UpdateCountry(
    $input: UpdateCountryInput!
    $condition: ModelCountryConditionInput
  ) {
    updateCountry(input: $input, condition: $condition) {
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
export const deleteCountry = /* GraphQL */ `
  mutation DeleteCountry(
    $input: DeleteCountryInput!
    $condition: ModelCountryConditionInput
  ) {
    deleteCountry(input: $input, condition: $condition) {
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
export const createWeightZoneTariff = /* GraphQL */ `
  mutation CreateWeightZoneTariff(
    $input: CreateWeightZoneTariffInput!
    $condition: ModelWeightZoneTariffConditionInput
  ) {
    createWeightZoneTariff(input: $input, condition: $condition) {
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
export const updateWeightZoneTariff = /* GraphQL */ `
  mutation UpdateWeightZoneTariff(
    $input: UpdateWeightZoneTariffInput!
    $condition: ModelWeightZoneTariffConditionInput
  ) {
    updateWeightZoneTariff(input: $input, condition: $condition) {
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
export const deleteWeightZoneTariff = /* GraphQL */ `
  mutation DeleteWeightZoneTariff(
    $input: DeleteWeightZoneTariffInput!
    $condition: ModelWeightZoneTariffConditionInput
  ) {
    deleteWeightZoneTariff(input: $input, condition: $condition) {
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
export const createSessions = /* GraphQL */ `
  mutation CreateSessions(
    $input: CreateSessionsInput!
    $condition: ModelSessionsConditionInput
  ) {
    createSessions(input: $input, condition: $condition) {
      id
      ipaddress
      userAgent
      createdAt
      updatedAt
    }
  }
`;
export const updateSessions = /* GraphQL */ `
  mutation UpdateSessions(
    $input: UpdateSessionsInput!
    $condition: ModelSessionsConditionInput
  ) {
    updateSessions(input: $input, condition: $condition) {
      id
      ipaddress
      userAgent
      createdAt
      updatedAt
    }
  }
`;
export const deleteSessions = /* GraphQL */ `
  mutation DeleteSessions(
    $input: DeleteSessionsInput!
    $condition: ModelSessionsConditionInput
  ) {
    deleteSessions(input: $input, condition: $condition) {
      id
      ipaddress
      userAgent
      createdAt
      updatedAt
    }
  }
`;
export const createCustomer = /* GraphQL */ `
  mutation CreateCustomer(
    $input: CreateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    createCustomer(input: $input, condition: $condition) {
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
export const updateCustomer = /* GraphQL */ `
  mutation UpdateCustomer(
    $input: UpdateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    updateCustomer(input: $input, condition: $condition) {
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
export const deleteCustomer = /* GraphQL */ `
  mutation DeleteCustomer(
    $input: DeleteCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    deleteCustomer(input: $input, condition: $condition) {
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
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
export const createBrand = /* GraphQL */ `
  mutation CreateBrand(
    $input: CreateBrandInput!
    $condition: ModelBrandConditionInput
  ) {
    createBrand(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const updateBrand = /* GraphQL */ `
  mutation UpdateBrand(
    $input: UpdateBrandInput!
    $condition: ModelBrandConditionInput
  ) {
    updateBrand(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const deleteBrand = /* GraphQL */ `
  mutation DeleteBrand(
    $input: DeleteBrandInput!
    $condition: ModelBrandConditionInput
  ) {
    deleteBrand(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const createCatalog = /* GraphQL */ `
  mutation CreateCatalog(
    $input: CreateCatalogInput!
    $condition: ModelCatalogConditionInput
  ) {
    createCatalog(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const updateCatalog = /* GraphQL */ `
  mutation UpdateCatalog(
    $input: UpdateCatalogInput!
    $condition: ModelCatalogConditionInput
  ) {
    updateCatalog(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const deleteCatalog = /* GraphQL */ `
  mutation DeleteCatalog(
    $input: DeleteCatalogInput!
    $condition: ModelCatalogConditionInput
  ) {
    deleteCatalog(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
export const createCart = /* GraphQL */ `
  mutation CreateCart(
    $input: CreateCartInput!
    $condition: ModelCartConditionInput
  ) {
    createCart(input: $input, condition: $condition) {
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
export const updateCart = /* GraphQL */ `
  mutation UpdateCart(
    $input: UpdateCartInput!
    $condition: ModelCartConditionInput
  ) {
    updateCart(input: $input, condition: $condition) {
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
export const deleteCart = /* GraphQL */ `
  mutation DeleteCart(
    $input: DeleteCartInput!
    $condition: ModelCartConditionInput
  ) {
    deleteCart(input: $input, condition: $condition) {
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
export const createOrderShipment = /* GraphQL */ `
  mutation CreateOrderShipment(
    $input: CreateOrderShipmentInput!
    $condition: ModelOrderShipmentConditionInput
  ) {
    createOrderShipment(input: $input, condition: $condition) {
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
export const updateOrderShipment = /* GraphQL */ `
  mutation UpdateOrderShipment(
    $input: UpdateOrderShipmentInput!
    $condition: ModelOrderShipmentConditionInput
  ) {
    updateOrderShipment(input: $input, condition: $condition) {
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
export const deleteOrderShipment = /* GraphQL */ `
  mutation DeleteOrderShipment(
    $input: DeleteOrderShipmentInput!
    $condition: ModelOrderShipmentConditionInput
  ) {
    deleteOrderShipment(input: $input, condition: $condition) {
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
export const createOrderPayment = /* GraphQL */ `
  mutation CreateOrderPayment(
    $input: CreateOrderPaymentInput!
    $condition: ModelOrderPaymentConditionInput
  ) {
    createOrderPayment(input: $input, condition: $condition) {
      id
      orderId
      status
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateOrderPayment = /* GraphQL */ `
  mutation UpdateOrderPayment(
    $input: UpdateOrderPaymentInput!
    $condition: ModelOrderPaymentConditionInput
  ) {
    updateOrderPayment(input: $input, condition: $condition) {
      id
      orderId
      status
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteOrderPayment = /* GraphQL */ `
  mutation DeleteOrderPayment(
    $input: DeleteOrderPaymentInput!
    $condition: ModelOrderPaymentConditionInput
  ) {
    deleteOrderPayment(input: $input, condition: $condition) {
      id
      orderId
      status
      description
      createdAt
      updatedAt
    }
  }
`;
export const createEvents = /* GraphQL */ `
  mutation CreateEvents(
    $input: CreateEventsInput!
    $condition: ModelEventsConditionInput
  ) {
    createEvents(input: $input, condition: $condition) {
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
export const updateEvents = /* GraphQL */ `
  mutation UpdateEvents(
    $input: UpdateEventsInput!
    $condition: ModelEventsConditionInput
  ) {
    updateEvents(input: $input, condition: $condition) {
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
export const deleteEvents = /* GraphQL */ `
  mutation DeleteEvents(
    $input: DeleteEventsInput!
    $condition: ModelEventsConditionInput
  ) {
    deleteEvents(input: $input, condition: $condition) {
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
