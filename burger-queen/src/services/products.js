import axios from 'axios'

const url='https://bq-api-2022.herokuapp.com/products'
const token = localStorage.getItem("token");

export const getAllProducts = (token) => {
    const request = axios.get(url, token)
    return request.then(response => response.data)
}

export const createProduct = async (credentials, config) => {
    const {name, price, image, type} = credentials
    const data = await axios.post(url, {name, price:Number(price), image, type}, config)
    return data
}

export const getOneProduct = (id, config) => {
    const data = axios.get(`${url}/${id}`, config)
    .then((res) => res.data)
    console.log(data)
    return data
    // console.log(`${url}/${id}`)
    // console.log(request.then(response => response.data))
    // return  request.then(response => response.data)
}

export const editProduct = async (id,credentials, config) => {
    const {name, price, image, type} = credentials
    const data = await axios.put(`${url}/${id}`, {name, price:Number(price), image, type}, config)
    return data
}

export const deleteProduct = async (id, config) => {
    return await axios.delete(`${url}/${id}`, config)
};

// export default {getAllProducts, } 