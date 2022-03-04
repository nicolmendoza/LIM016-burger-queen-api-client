import axios from "axios";

// const url='https://bq-api-2022.herokuapp.com/orders'
// const token = localStorage.getItem("token");




export const editProduct = async (url, id, credentials, config) => {
  console.log(config);
  console.log(`${url}/${id}`);
  const { status } = credentials;
  const data = await axios.put(`${url}/${id}`, credentials, config);
  return data;
};
