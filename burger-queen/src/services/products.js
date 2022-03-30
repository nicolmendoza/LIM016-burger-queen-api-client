import axios from "axios";

const url = "https://bq-api-2022.herokuapp.com/products";


const limit = "?limit=50";

// const header = {
//   headers: {
//     Authorization: `Bearer ${token}`,
//   },
// };

export const getAllProducts = async (url, header) => {
  try {
    const request = await axios.get(`${url}${limit}`, header);

    return request;
  } catch (err) {
    console.log(err.response);
  }
};

export const createProduct = async (credentials, config) => {
  const { name, price, image, type } = credentials;
  const data = await axios.post(
    url,
    { name, price: Number(price), image, type },
    config
  );
  return data;
};

export const getOneProduct = (id, config) => {
  const data = axios.get(`${url}/${id}`, config).then((res) => res.data);
  //console.log(data);
  return data;
  // console.log(`${url}/${id}`)
  // console.log(request.then(response => response.data))
  // return  request.then(response => response.data)
};

export const editProduct = async (id, credentials, config) => {
  const { name, price, image, type } = credentials;
  const data = await axios.put(
    `${url}/${id}`,
    { name, price: Number(price), image, type },
    config
  );
  return data;
};

export const deleteProduct = async (url, id, config) => {
  //console.log(`${url}/${id}`);
  const deleteProd = await axios.delete(`${url}/${id}`, config);
  //console.log(deleteProd);
  return deleteProd;
};

export const deleteUser = async (id, config) => {
  return await axios.delete(`${url}/${id}`, config);
};

// export default {getAllProducts, }
