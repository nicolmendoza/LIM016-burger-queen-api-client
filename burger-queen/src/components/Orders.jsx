import React, { useEffect, useState } from "react";
import axios from "axios";
import { getAllOrders, editProduct } from "../services/orders";
import { Link } from "react-router-dom";
import {
  Button,
  ContainerProduts,
  OrderDiv,
  Container,
  ButtonModal
} from "../style-components/components";
import Sidebar from "./Navegador";
import { color } from "@mui/system";

const Orders = () => {
  const url = "https://bq-api-2022.herokuapp.com/orders";

  const token = localStorage.getItem("token");
  const roleUser = localStorage.getItem("role");
  const options = {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
  };

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    setLoading(true);
    getOrders();
  }, []);

  const getOrders = () =>
    getAllOrders(url, options).then((order) => {
      console.log(order);
      setOrders(order);
      setFilter(order);
      setLoading(false);
    });

  function ButtonStatus(order) {
    const isLoggedIn = order.isLoggedIn;
    if (isLoggedIn.status === "pending") {
      return (
        <Button onClick={() => handleSubmit("canceled", isLoggedIn._id)}>
          Cancelar
        </Button>
      );
    }
    if (isLoggedIn.status === "delivering") {
      return (
        <Button onClick={() => handleSubmit("delivered", isLoggedIn._id)}>
          Entregar
        </Button>
      );
    }
    return "";
  }

  const handleSubmit = async (value, id) => {
    console.log(value, id);
    const newState = { status: `${value}` };
    const res = await editProduct(url, id, newState, options);
    console.log(res);
    getOrders();
  };

  const handleBackground = (status) => {
    if(status==='pending') return 'rgba(7, 120, 45, 0.35)'
    if(status==='canceled') return 'rgba(114, 22, 22, 0.35)'
    if(status==='delivering') return 'rgba(112, 114, 22, 0.27)'
    if(status==='delivered') return 'rgba(22, 108, 114, 0.27)'
  }
  const allProducts = () => {
    setFilter(orders);
  };

  const filterProductsByType = (type) => {
    setFilter(orders.filter((x) => x.status === type));
  };

  return (
    <div>
      <Sidebar value={`${roleUser}`}></Sidebar>
      <Container background='../img/back.jpg'>
        {roleUser === "cocinera" ? (
          "No tiene acceso para esta ruta"
        ) : (
          <>
            <div className="buttons d-flex justify-content-center mb-2">
              <Button onClick={() => allProducts()}>Todas</Button>
              <Button onClick={() => filterProductsByType("pending")}>
                Pendientes
              </Button>
              <Button onClick={() => filterProductsByType("delivering")}>
                Listos
              </Button>
              <Button onClick={() => filterProductsByType("delivered")}>
                Entregados
              </Button>
              <Button onClick={() => filterProductsByType("canceled")}>
                Cancelados
              </Button>
            </div>
            {loading ? (
              "Cargando..."
            ) : (
              <ContainerProduts>
                {filter.map((x) => (
                    <React.Fragment key={x._id}>
                    <OrderDiv background={handleBackground(x.status)}>
                      <p style={{ textTransform: "uppercase" }}>{x.status}</p>
                      <div>{x.client ? <p>Cliente : {x.client}</p> : ""}</div>
                      <b><p>Productos : </p></b>
                      {x.products.map((product) => (
                        <div key={product._id}>
                          <p>{product.product.name}</p>
                
                          <p> Qty : {product.qty}</p>
                      {product.comment?<p>Extra :{product.comment} </p>:""}
                        </div>
                      ))}
                      <ButtonStatus isLoggedIn={x} />
                    </OrderDiv>
                  </React.Fragment>
                ))}
              </ContainerProduts>
            )}
          </>
        )}
      </Container>
    </div>
  );
};

export default Orders;
