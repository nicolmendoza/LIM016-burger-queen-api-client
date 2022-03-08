const products = {
  dataAll: [
    {
      _id: 1,
      name: "cafe",
      price: 11,
      image: "imagen",
      type: "Desayuno",
    },
    {
      _id: 2,
      name: "hamburguesa2",
      price: 11,
      image: "imagen2",
      type: "Hamburguesas",
    },
    {
      _id: 3,
      name: "gaseosa",
      price: 11,
      image: "imagen",
      type: "Bebidas",
    },
    {
      _id: 4,
      name: "papas",
      price: 11,
      image: "imagen",
      type: "Acompañamientos",
    },
  ],
  dataAllDelete: [
    {
      _id: 2,
      name: "hamburguesa2",
      price: 11,
      image: "imagen2",
      type: "Hamburguesas",
    },
    {
      _id: 3,
      name: "gaseosa",
      price: 11,
      image: "imagen",
      type: "Bebidas",
    },
    {
      _id: 4,
      name: "papas",
      price: 11,
      image: "imagen",
      type: "Acompañamientos",
    },
  ],

  dataDelete: [
    {
      _id: 1,
      name: "cafe",
      price: 11,
      image: "imagen",
      type: "Desayuno",
    },
  ],
  link: '<http://bq-api-2022.herokuapp.com/products?limit=10&page=1>; rel="first", <http://bq-api-2022.herokuapp.com/products?limit=10&page=1>; rel="prev", <http://bq-api-2022.herokuapp.com/products?limit=10&page=2>; rel="next", <http://bq-api-2022.herokuapp.com/products?limit=10&page=2>; rel="last"',

  newProduct:     {
    _id: 5,
    name: "huevos",
    price: 11,
    image: "imagen",
    type: "Desayuno",
  },

  dataAllAddNewProduct:[
    {
      _id: 1,
      name: "cafe",
      price: 11,
      image: "imagen",
      type: "Desayuno",
    },
    {
      _id: 2,
      name: "hamburguesa2",
      price: 11,
      image: "imagen2",
      type: "Hamburguesas",
    },
    {
      _id: 3,
      name: "gaseosa",
      price: 11,
      image: "imagen",
      type: "Bebidas",
    },
    {
      _id: 4,
      name: "papas",
      price: 11,
      image: "imagen",
      type: "Acompañamientos",
    },
    {
      _id: 5,
      name: "huevos",
      price: 11,
      image: "imagen",
      type: "Desayuno",
    }
  ]
};

export default products;
