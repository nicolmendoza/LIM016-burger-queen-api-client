import axios from 'axios'

const url='https://bq-api-2022.herokuapp.com/orders'
// const token = localStorage.getItem("token");

export const getAllOrders = (token) => {
    const request = axios.get(url, token)
    return request.then(response => response.data)
}

export const editProduct = async (id,credentials, config) => {
    console.log(credentials)
    const {status} = credentials
    const data = await axios.put(`${url}/${id}`, credentials, config)
    return data
}