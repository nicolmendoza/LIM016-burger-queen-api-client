const orders = {
  dataVacia: [],
  dataPending: [
    {
      client: "rosa",
      products: [
        {
          qty: 1,
          comment: "xx",
          product: {
            name: "cafe",
            price: 11,
            image: "imagen",
            type: "desayuno",
          },
        },
      ],
      status: "pending",
      dateEntry: "2022-02-24T02:08:28.641+00:00",
      dateProcessed: "2022-02-24T02:08:28.641+00:00",
      createdAt: "2022-02-24T02:08:28.641+00:00",
      updatedAt: "2022-02-24T02:09:10.281+00:00",
    },
  ],
  dataDelivering: [
    {
      client: "rosa",
      products: [
        {
          qty: 1,
          comment: "xx",
          product: {
            name: "cafe",
            price: 11,
            image: "imagen",
            type: "desayuno",
          },
        },
      ],
      status: "delivering",
      dateEntry: "2022-02-24T02:08:28.641+00:00",
      dateProcessed: "2022-02-24T02:08:28.641+00:00",
      createdAt: "2022-02-24T02:08:28.641+00:00",
      updatedAt: "2022-02-24T02:09:10.281+00:00",
    },
  ],
  dataPut: [
    {
      client: "rosa",
      products: [
        {
          qty: 1,
          comment: "xx",
          product: {
            name: "cafe",
            price: 11,
            image: "imagen",
            type: "desayuno",
          },
        },
      ],
      status: "delivering",
      dateEntry: "2022-02-24T02:08:28.641+00:00",
      dateProcessed: "2022-02-24T02:08:28.641+00:00",
      createdAt: "2022-02-24T02:08:28.641+00:00",
      updatedAt: "2022-02-24T02:09:10.281+00:00",
    },
  ],
  dataWithOutComment: [
    {
      client: "rosa",
      products: [
        {
          qty: 1,
          product: {
            name: "cafe",
            price: 11,
            image: "imagen",
            type: "desayuno",
          },
        },
      ],
      status: "pending",
      dateEntry: "2022-02-24T02:08:28.641+00:00",
      dateProcessed: "2022-02-24T02:08:28.641+00:00",
      createdAt: "2022-02-24T02:08:28.641+00:00",
      updatedAt: "2022-02-24T02:09:10.281+00:00",
    },
  ],
  dataAll: [
    {
      client: "rosa",
      products: [
        {
          qty: 1,
          product: {
            name: "cafe",
            price: 11,
            image: "imagen",
            type: "desayuno",
          },
        },
      ],
      status: "pending",
      dateEntry: "2022-02-24T02:08:28.641+00:00",
      dateProcessed: "2022-02-24T02:08:28.641+00:00",
      createdAt: "2022-02-24T02:08:28.641+00:00",
      updatedAt: "2022-02-24T02:09:10.281+00:00",
    },
    {
      client: "luis",
      products: [
        {
          qty: 1,
          product: {
            name: "cafe",
            price: 11,
            image: "imagen",
            type: "desayuno",
          },
        },
      ],
      status: "canceled",
      dateEntry: "2022-02-24T02:08:28.641+00:00",
      dateProcessed: "2022-02-24T02:08:28.641+00:00",
      createdAt: "2022-02-24T02:08:28.641+00:00",
      updatedAt: "2022-02-24T02:09:10.281+00:00",
    },
    {
    
      products: [
        {
          qty: 1,
          comment: "xx",
          product: {
            name: "cafe",
            price: 11,
            image: "imagen",
            type: "desayuno",
          },
        },
      ],
      status: "delivering",
      dateEntry: "2022-02-24T02:08:28.641+00:00",
      dateProcessed: "2022-02-24T02:08:28.641+00:00",
      createdAt: "2022-02-24T02:08:28.641+00:00",
      updatedAt: "2022-02-24T02:09:10.281+00:00",
    },
    {
      client: "merly",
      products: [
        {
          qty: 1,
          product: {
            name: "cafe",
            price: 11,
            image: "imagen",
            type: "desayuno",
          },
        },
      ],
      status: "delivered",
      dateEntry: "2022-02-24T02:08:28.641+00:00",
      dateProcessed: "2022-02-24T02:08:28.641+00:00",
      createdAt: "2022-02-24T02:08:28.641+00:00",
      updatedAt: "2022-02-24T02:09:10.281+00:00",
    },

  ],

  dataAllCancelled: [
    {
      client: "rosa",
      products: [
        {
          qty: 1,
          product: {
            name: "cafe",
            price: 11,
            image: "imagen",
            type: "desayuno",
          },
        },
      ],
      status: "cancelled",
      dateEntry: "2022-02-24T02:08:28.641+00:00",
      dateProcessed: "2022-02-24T02:08:28.641+00:00",
      createdAt: "2022-02-24T02:08:28.641+00:00",
      updatedAt: "2022-02-24T02:09:10.281+00:00",
    },
  ],
  dataAllDelivered:[
    {
      
      products: [
        {
          qty: 1,
          comment: "xx",
          product: {
            name: "cafe",
            price: 11,
            image: "imagen",
            type: "desayuno",
          },
        },
      ],
      status: "delivered",
      dateEntry: "2022-02-24T02:08:28.641+00:00",
      dateProcessed: "2022-02-24T02:08:28.641+00:00",
      createdAt: "2022-02-24T02:08:28.641+00:00",
      updatedAt: "2022-02-24T02:09:10.281+00:00",
    },
  ]

};

export default orders;
