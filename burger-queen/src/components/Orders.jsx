import React, { useEffect, useState } from "react";
import axios from "axios";
import {getAllOrders, editProduct} from '../services/orders'
import {Link} from 'react-router-dom'
import { Button } from "../style-components/components";

const Orders = () => {
  const token = localStorage.getItem("token");
  const options = {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
  };

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false)
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true)
      getOrders()
    }, 2000);
  }, []);

  const getOrders = () => getAllOrders(options)
        .then((order) => {
            setOrders(order)
            setFilter(order);
            setLoading(false)
  })

  const buttonStatus = (status) => {
    if(status==="pending") return "cancelar"
    if(status==="delivering") return "entregar"
  } 

  const statusOrder = (status) => {
    if(status==="pending") return "canceled"
    if(status==="delivering") return "delivered"
  } 

  const handleSubmit = async (value, id) => {
    const newState = {status:`${value}`}
    const res = await editProduct(id, newState, options)
    console.log(res)
    getOrders()
  }

  const allProducts = () => {
    setFilter(orders);
  };

  const filterProductsByType = (type) => {
    console.log(type)
    setFilter(orders.filter((x) => x.status === type));
    console.log(filter)
  };

  return (
    <div>
      <div className="buttons d-flex justify-content-center mb-2">
            <Button onClick={() => allProducts() }>Todas</Button>
            <Button onClick={() => filterProductsByType('pending') }>Pendientes</Button>
            <Button onClick={() => filterProductsByType('delivering') }>Listos</Button>
            <Button onClick={() => filterProductsByType('delivered') }>Entregados</Button>
            <Button onClick={() => filterProductsByType('canceled') }>Cancelados</Button>
          </div>
      <h1>Todas las ordenes</h1>
      {loading ? "Cargando..." : ""}
      <div className="container ">
        {filter.map((order) => (
          <div key={order._id}>
            <p>{order.status}</p>
            <div>
              <p>{order.client}</p>
              <p>{order.userId}</p>
            </div>
            {order.products.map((product) => (
              <div>
                <div>{product.product.name}</div>
                <p>{product.qty}</p>
              </div>
            ))}
            <Button onClick={()=> handleSubmit(statusOrder(order.status), order._id)}>{buttonStatus(order.status)}</Button>
          </div>
        ))}
      </div>
      </div>
)
}


export default Orders;