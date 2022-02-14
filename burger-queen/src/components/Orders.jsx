import React, { useEffect, useState } from "react";
import axios from "axios";
import {getAllOrders, editProduct} from '../services/orders'
import {Link} from 'react-router-dom'
import { Button, ContainerProduts, OrderDiv, Container} from "../style-components/components";
import Sidebar from './Navegador'

const Orders = () => {
  const url='https://bq-api-2022.herokuapp.com/orders'

  const token = localStorage.getItem("token");
  const decodeToken = localStorage.getItem("role");
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

  const getOrders = () => getAllOrders(url, options)
        .then((order) => {
            setOrders(order)
            setFilter(order);
            setLoading(false)
  })

  function ButtonStatus(order) {
  const isLoggedIn = order.isLoggedIn;
  if (isLoggedIn.status==='pending') {
    return <Button onClick={()=> handleSubmit('canceled', isLoggedIn._id)}>Cancelar</Button>
  }
  if (isLoggedIn.status==='delivering') {
    return <Button onClick={()=> handleSubmit('delivered', isLoggedIn._id)}>Entregar</Button>
  }
  return ''
}

  const handleSubmit = async (value, id) => {
    console.log(value, id)
    const newState = {status:`${value}`}
    const res = await editProduct(url, id, newState, options)
    console.log(res)
    getOrders()
  }

  const allProducts = () => {
    setFilter(orders);
  };

  const filterProductsByType = (type) => {
    setFilter(orders.filter((x) => x.status === type));
  };

  return (
    <div>
      <Sidebar value={`${decodeToken}`}></Sidebar>
    <Container>
      <div className="buttons d-flex justify-content-center mb-2">
            <Button onClick={() => allProducts() }>Todas</Button>
            <Button onClick={() => filterProductsByType('pending') }>Pendientes</Button>
            <Button onClick={() => filterProductsByType('delivering') }>Listos</Button>
            <Button onClick={() => filterProductsByType('delivered') }>Entregados</Button>
            <Button onClick={() => filterProductsByType('canceled') }>Cancelados</Button>
          </div>
      <h1>Todas las ordenes</h1>
      {loading ? "Cargando..." : ""}
      <ContainerProduts>
        {filter.map((order) => (
          <OrderDiv key={order._id}>
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
            <ButtonStatus isLoggedIn={order}/>
          </OrderDiv>
        ))}
      </ContainerProduts>
    </Container>
    </div>
  )
}

export default Orders;