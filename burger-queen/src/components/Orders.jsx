import React, { useEffect, useState } from "react";
import axios from "axios";
import {getAllOrders} from '../services/orders'
import CreateProduct from "./CreateProduct";
import {Link} from 'react-router-dom'

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

  useEffect(() => {
    setTimeout(() => {
      setLoading(true)
      getOrders()
    }, 2000);
  }, []);

  const getOrders = () => getAllOrders(options)
        .then((order) => {
            setOrders(order)
            setLoading(false)
  })

  return (
    <div>
      <h1>Todas las ordenes</h1>
      {loading ? "Cargando..." : ""}
      <div className="container ">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">UserId</th>
              <th scope="col">Cliente</th>
              <th scope="col">Productos</th>
              <th scope="col">Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr className="table-active" key={order._id}>
                <th scope="row">
                  {order.userId}
                </th>
                <td>{order.client}</td>
                <td>
                  {order.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
)
}


export default Orders;