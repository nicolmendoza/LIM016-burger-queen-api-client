const users = {
  dataAll: [
    {
      _id: "6211a7e4c457ec781d3f4667",
      email: "luis@burgerqueen.com",
      password: "$2b$10$CJ7yImH.ToAIhXr.msNyTO1lTLRyMhKZ01ozkhlrTQLsm/pi7Iltm",
      roles: {
        admin: true,
      },
      image:
        "https://media.istockphoto.com/photos/passport-picture-of-a-cool-guy-in...",
      createdAt: "2022-02-20T02:31:00.686+00:00",
      updatedAt: "2022-02-27T23:25:30.739+00:00",
      nameUser: "Luis",
    },
    {
      _id: "123",
      email: "maria@burgerqueen.com",
      password: "$2b$10$CJ7yImH.ToAIhXr.msNyTO1lTLRyMhKZ01ozkhlrTQLsm/pi7Iltm",
      roles: {
        admin: false,
        name: "mesera",
      },
      image:
        "https://media.istockphoto.com/photos/passport-picture-of-a-cool-guy-in...",
      createdAt: "2022-02-20T02:31:00.686+00:00",
      updatedAt: "2022-02-27T23:25:30.739+00:00",
      nameUser: "maria",
    },
    {
      _id: "6211a7e4c457ec781d3f4667",
      email: "luisa@burgerqueen.com",
      password: "$2b$10$CJ7yImH.ToAIhXr.msNyTO1lTLRyMhKZ01ozkhlrTQLsm/pi7Iltm",
      roles: {
        admin: false,
        name: "mesera",
      },
      image:
        "https://media.istockphoto.com/photos/passport-picture-of-a-cool-guy-in...",
      createdAt: "2022-02-20T02:31:00.686+00:00",
      updatedAt: "2022-02-27T23:25:30.739+00:00",
      nameUser: "luisa",
    },
  ],
  dataAllDelete: [

    {
      _id: "6211a7e4c457ec781d3f4667",
      email: "maria@burgerqueen.com",
      password: "$2b$10$CJ7yImH.ToAIhXr.msNyTO1lTLRyMhKZ01ozkhlrTQLsm/pi7Iltm",
      roles: {
        admin: false,
        name: "mesera",
      },
      image:
        "https://media.istockphoto.com/photos/passport-picture-of-a-cool-guy-in...",
      createdAt: "2022-02-20T02:31:00.686+00:00",
      updatedAt: "2022-02-27T23:25:30.739+00:00",
      nameUser: "maria",
    },
    {
      _id: "6211a7e4c457ec781d3f4667",
      email: "luisa@burgerqueen.com",
      password: "$2b$10$CJ7yImH.ToAIhXr.msNyTO1lTLRyMhKZ01ozkhlrTQLsm/pi7Iltm",
      roles: {
        admin: false,
        name: "mesera",
      },
      image:
        "https://media.istockphoto.com/photos/passport-picture-of-a-cool-guy-in...",
      createdAt: "2022-02-20T02:31:00.686+00:00",
      updatedAt: "2022-02-27T23:25:30.739+00:00",
      nameUser: "luisa",
    },
  ],
  dataLink:'<http://bq-api-2022.herokuapp.com/users?limit=10&page=1>; rel="first", <http://bq-api-2022.herokuapp.com/users?limit=10&page=1>; rel="prev", <http://bq-api-2022.herokuapp.com/users?limit=10&page=1>; rel="next", <http://bq-api-2022.herokuapp.com/users?limit=10&page=1>; rel="last"'

  ,dataDelete:[
    {
      _id: "6211a7e4c457ec781d3f4667",
      email: "luis@burgerqueen.com",
      password: "$2b$10$CJ7yImH.ToAIhXr.msNyTO1lTLRyMhKZ01ozkhlrTQLsm/pi7Iltm",
      roles: {
        admin: true,
      },
      image:
        "https://media.istockphoto.com/photos/passport-picture-of-a-cool-guy-in...",
      createdAt: "2022-02-20T02:31:00.686+00:00",
      updatedAt: "2022-02-27T23:25:30.739+00:00",
      nameUser: "Luis",
    },
  ],
  dataNewUser:{
      _id: "6211a7e4c457ec781d3f4667",
      email: "lesly@burgerqueen.com",
      password: "$2b$10$CJ7yImH.ToAIhXr.msNyTO1lTLRyMhKZ01ozkhlrTQLsm/pi7Iltm",
      roles: {
        admin: true,
      },
      image:
        "https://media.istockphoto.com/photos/passport-picture-of-a-cool-guy-in...",
      createdAt: "2022-02-20T02:31:00.686+00:00",
      updatedAt: "2022-02-27T23:25:30.739+00:00",
      nameUser: "lesly",
   
  },

  dataAllAndNewUser: [
    {
      _id: "6211a7e4c457ec781d3f4667",
      email: "luis@burgerqueen.com",
      password: "$2b$10$CJ7yImH.ToAIhXr.msNyTO1lTLRyMhKZ01ozkhlrTQLsm/pi7Iltm",
      roles: {
        admin: true,
      },
      image:
        "https://media.istockphoto.com/photos/passport-picture-of-a-cool-guy-in...",
      createdAt: "2022-02-20T02:31:00.686+00:00",
      updatedAt: "2022-02-27T23:25:30.739+00:00",
      nameUser: "Luis",
    },
    {
      _id: "6211a7e4c457ec781d3f4667",
      email: "maria@burgerqueen.com",
      password: "$2b$10$CJ7yImH.ToAIhXr.msNyTO1lTLRyMhKZ01ozkhlrTQLsm/pi7Iltm",
      roles: {
        admin: false,
        name: "mesera",
      },
      image:
        "https://media.istockphoto.com/photos/passport-picture-of-a-cool-guy-in...",
      createdAt: "2022-02-20T02:31:00.686+00:00",
      updatedAt: "2022-02-27T23:25:30.739+00:00",
      nameUser: "maria",
    },
    {
      _id: "6211a7e4c457ec781d3f4667",
      email: "luisa@burgerqueen.com",
      password: "$2b$10$CJ7yImH.ToAIhXr.msNyTO1lTLRyMhKZ01ozkhlrTQLsm/pi7Iltm",
      roles: {
        admin: false,
        name: "mesera",
      },
      image:
        "https://media.istockphoto.com/photos/passport-picture-of-a-cool-guy-in...",
      createdAt: "2022-02-20T02:31:00.686+00:00",
      updatedAt: "2022-02-27T23:25:30.739+00:00",
      nameUser: "luisa",
    },
    {
      _id: "6211a7e4c457ec781d3f4667",
      email: "lesly@burgerqueen.com",
      password: "$2b$10$CJ7yImH.ToAIhXr.msNyTO1lTLRyMhKZ01ozkhlrTQLsm/pi7Iltm",
      roles: {
        admin: true,
      },
      image:
        "https://media.istockphoto.com/photos/passport-picture-of-a-cool-guy-in...",
      createdAt: "2022-02-20T02:31:00.686+00:00",
      updatedAt: "2022-02-27T23:25:30.739+00:00",
      nameUser: "lesly",
   
  }

  ],
};
export default users;
