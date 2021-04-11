/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      note
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        note
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getMarket = /* GraphQL */ `
  query GetMarket($id: ID!) {
    getMarket(id: $id) {
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
export const listMarkets = /* GraphQL */ `
  query ListMarkets(
    $filter: ModelMarketFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMarkets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getMarketProduct = /* GraphQL */ `
  query GetMarketProduct($id: ID!) {
    getMarketProduct(id: $id) {
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
export const listMarketProducts = /* GraphQL */ `
  query ListMarketProducts(
    $filter: ModelMarketProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMarketProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const getCountry = /* GraphQL */ `
  query GetCountry($id: ID!) {
    getCountry(id: $id) {
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
export const listCountrys = /* GraphQL */ `
  query ListCountrys(
    $filter: ModelCountryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCountrys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        code
        name
        zone
        shippingDays
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getWeightZoneTariff = /* GraphQL */ `
  query GetWeightZoneTariff($id: ID!) {
    getWeightZoneTariff(id: $id) {
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
export const listWeightZoneTariffs = /* GraphQL */ `
  query ListWeightZoneTariffs(
    $filter: ModelWeightZoneTariffFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWeightZoneTariffs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        zone
        max
        min
        tariff
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSessions = /* GraphQL */ `
  query GetSessions($id: ID!) {
    getSessions(id: $id) {
      id
      ipaddress
      userAgent
      createdAt
      updatedAt
    }
  }
`;
export const listSessionss = /* GraphQL */ `
  query ListSessionss(
    $filter: ModelSessionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSessionss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        ipaddress
        userAgent
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCustomer = /* GraphQL */ `
  query GetCustomer($id: ID!) {
    getCustomer(id: $id) {
      id
      username
      email
      phone_number
      fullName
      locale
      shippingAddress {
        city
        country
        address_line1
        address_state
        address_zip
      }
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
      deleted
    }
  }
`;
export const listCustomers = /* GraphQL */ `
  query ListCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        phone_number
        fullName
        locale
        shippingAddress {
          city
          country
          address_line1
          address_state
          address_zip
        }
        createdAt
        updatedAt
        orders {
          nextToken
        }
        deleted
      }
      nextToken
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
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
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getBrand = /* GraphQL */ `
  query GetBrand($id: ID!) {
    getBrand(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const listBrands = /* GraphQL */ `
  query ListBrands(
    $filter: ModelBrandFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBrands(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCatalog = /* GraphQL */ `
  query GetCatalog($id: ID!) {
    getCatalog(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const listCatalogs = /* GraphQL */ `
  query ListCatalogs(
    $filter: ModelCatalogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCatalogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      sessionId
      session {
        id
        ipaddress
        userAgent
        createdAt
        updatedAt
      }
      customer {
        id
        username
        email
        phone_number
        fullName
        locale
        shippingAddress {
          city
          country
          address_line1
          address_state
          address_zip
        }
        createdAt
        updatedAt
        orders {
          nextToken
        }
        deleted
      }
      status
      cartIds
      totalPrice
      statusDescription
      createdAt
      updatedAt
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        sessionId
        session {
          id
          ipaddress
          userAgent
          createdAt
          updatedAt
        }
        customer {
          id
          username
          email
          phone_number
          fullName
          locale
          createdAt
          updatedAt
          deleted
        }
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
`;
export const getCart = /* GraphQL */ `
  query GetCart($id: ID!) {
    getCart(id: $id) {
      id
      sessionId
      session {
        id
        ipaddress
        userAgent
        createdAt
        updatedAt
      }
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
    }
  }
`;
export const listCarts = /* GraphQL */ `
  query ListCarts(
    $filter: ModelCartFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCarts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        sessionId
        session {
          id
          ipaddress
          userAgent
          createdAt
          updatedAt
        }
        productId
        product {
          id
          description
          brandId
          catalogId
          price
          stock
          weight
          imageUrl
          supplier
          enabled
          createdAt
          updatedAt
        }
        quantity
        totalPrice
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOrderShipment = /* GraphQL */ `
  query GetOrderShipment($id: ID!) {
    getOrderShipment(id: $id) {
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
export const listOrderShipments = /* GraphQL */ `
  query ListOrderShipments(
    $filter: ModelOrderShipmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderShipments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getOrderPayment = /* GraphQL */ `
  query GetOrderPayment($id: ID!) {
    getOrderPayment(id: $id) {
      id
      orderId
      status
      description
      createdAt
      updatedAt
    }
  }
`;
export const listOrderPayments = /* GraphQL */ `
  query ListOrderPayments(
    $filter: ModelOrderPaymentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderPayments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        orderId
        status
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEvents = /* GraphQL */ `
  query GetEvents($id: ID!) {
    getEvents(id: $id) {
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
export const listEventss = /* GraphQL */ `
  query ListEventss(
    $filter: ModelEventsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        orderId
        type
        status
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const countryByCode = /* GraphQL */ `
  query CountryByCode(
    $code: String
    $sortDirection: ModelSortDirection
    $filter: ModelCountryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    countryByCode(
      code: $code
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        code
        name
        zone
        shippingDays
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTariffByZone = /* GraphQL */ `
  query GetTariffByZone(
    $zone: String
    $sortDirection: ModelSortDirection
    $filter: ModelWeightZoneTariffFilterInput
    $limit: Int
    $nextToken: String
  ) {
    GetTariffByZone(
      zone: $zone
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        zone
        max
        min
        tariff
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTariffByZoneWeight = /* GraphQL */ `
  query GetTariffByZoneWeight(
    $zone: String
    $max: ModelFloatKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelWeightZoneTariffFilterInput
    $limit: Int
    $nextToken: String
  ) {
    GetTariffByZoneWeight(
      zone: $zone
      max: $max
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        zone
        max
        min
        tariff
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTariffByZoneMaxMin = /* GraphQL */ `
  query GetTariffByZoneMaxMin(
    $zone: String
    $maxMin: ModelWeightZoneTariffZonemaxMinIndexCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelWeightZoneTariffFilterInput
    $limit: Int
    $nextToken: String
  ) {
    GetTariffByZoneMaxMin(
      zone: $zone
      maxMin: $maxMin
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        zone
        max
        min
        tariff
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCustomerByEmail = /* GraphQL */ `
  query GetCustomerByEmail(
    $email: String
    $sortDirection: ModelSortDirection
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    GetCustomerByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        username
        email
        phone_number
        fullName
        locale
        shippingAddress {
          city
          country
          address_line1
          address_state
          address_zip
        }
        createdAt
        updatedAt
        orders {
          nextToken
        }
        deleted
      }
      nextToken
    }
  }
`;
export const getProductByBrandId = /* GraphQL */ `
  query GetProductByBrandId(
    $brandId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getProductByBrandId(
      brandId: $brandId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getProductByCatalog = /* GraphQL */ `
  query GetProductByCatalog(
    $catalogId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getProductByCatalog(
      catalogId: $catalogId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getOrderBySession = /* GraphQL */ `
  query GetOrderBySession(
    $sessionId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getOrderBySession(
      sessionId: $sessionId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        sessionId
        session {
          id
          ipaddress
          userAgent
          createdAt
          updatedAt
        }
        customer {
          id
          username
          email
          phone_number
          fullName
          locale
          createdAt
          updatedAt
          deleted
        }
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
`;
export const getOrderProductByProduct = /* GraphQL */ `
  query GetOrderProductByProduct(
    $productId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelCartFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getOrderProductByProduct(
      productId: $productId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        sessionId
        session {
          id
          ipaddress
          userAgent
          createdAt
          updatedAt
        }
        productId
        product {
          id
          description
          brandId
          catalogId
          price
          stock
          weight
          imageUrl
          supplier
          enabled
          createdAt
          updatedAt
        }
        quantity
        totalPrice
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProductsBySession = /* GraphQL */ `
  query GetProductsBySession(
    $sessionId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelCartFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getProductsBySession(
      sessionId: $sessionId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        sessionId
        session {
          id
          ipaddress
          userAgent
          createdAt
          updatedAt
        }
        productId
        product {
          id
          description
          brandId
          catalogId
          price
          stock
          weight
          imageUrl
          supplier
          enabled
          createdAt
          updatedAt
        }
        quantity
        totalPrice
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getShipmentByOrderId = /* GraphQL */ `
  query GetShipmentByOrderId(
    $orderId: String
    $sortDirection: ModelSortDirection
    $filter: ModelOrderShipmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getShipmentByOrderId(
      orderId: $orderId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getPaymentByOrderId = /* GraphQL */ `
  query GetPaymentByOrderId(
    $orderId: String
    $sortDirection: ModelSortDirection
    $filter: ModelOrderPaymentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getPaymentByOrderId(
      orderId: $orderId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        orderId
        status
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEventByOrderId = /* GraphQL */ `
  query GetEventByOrderId(
    $orderId: String
    $sortDirection: ModelSortDirection
    $filter: ModelEventsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getEventByOrderId(
      orderId: $orderId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        orderId
        type
        status
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
