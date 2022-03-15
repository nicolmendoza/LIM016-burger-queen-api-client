import React, { useEffect, useState } from "react";
import axios from "axios";
import { getAllOrders, editProduct } from "../services/orders";
import {
  Button,
  ContainerProduts,
  OrderDiv,
  Container,
  ButtonModal,
  GroupTab,
  ButtonOrder,
  Tab
} from "../style-components/components";
import Sidebar from "./Navegador";
import Loader from '../utils/Loader'
import Order from "../utils/DivOrden"
import UserInfo from './New Order/components/User'
import back from "../img/back.webp"

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

  const types = [['', 'Todas'], ['pending', 'Pendientes'], ['delivering', 'Listos'], ['delivered', 'Entregados'], ['canceled', 'Cancelados']]

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState([]);
  const [active, setActive] = useState(types[0][1])


  useEffect(() => {
    setLoading(true);
    getOrders();
  }, []);

  const getOrders = async () => {
    try {
      const res = await axios.get(`${url}?limit=100`, options);
      setOrders(res.data);
      setFilter(res.data);
      setLoading(false);
    } catch (err) {
      console.log(err.data);
    }
  };

  function ButtonStatus(order) {
    const isLoggedIn = order.isLoggedIn;
    if (isLoggedIn.status === "pending") {
      return (
        <ButtonOrder onClick={() => handleSubmit("canceled", isLoggedIn._id)}>
          Cancelar
        </ButtonOrder>
      );
    }
    if (isLoggedIn.status === "delivering") {
      return (
        <ButtonOrder onClick={() => handleSubmit("delivered", isLoggedIn._id)}>
          Entregar
        </ButtonOrder>
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

  // const handleBackground = (status) => {
  //   if (status === "pending") return "rgba(7, 120, 45, 0.35)";
  //   if (status === "canceled") return "rgba(114, 22, 22, 0.35)";
  //   if (status === "delivering") return "rgba(112, 114, 22, 0.27)";
  //   if (status === "delivered") return "rgba(22, 108, 114, 0.27)";
  // };
  const allProducts = (type) => {
    setFilter(orders);
    setActive(type[1])
  };

  const filterProductsByType = (type) => {
    setFilter(orders.filter((x) => x.status === type[0]));
    setActive(type[1])
  };

  return (
    <div>
      <Sidebar value={`${roleUser}`}></Sidebar>
      <Container background={back} valid='true'>
        {roleUser === "cocinera" ? 
          "No tiene acceso para esta ruta"
         : 
          <>
          <UserInfo/>
          <GroupTab>
          {
            types.map(type => (
              <Tab 
              key={type[1]}
              active={active === type[1]}
              onClick={type[1]==='Todas'? () => allProducts(type) : () => filterProductsByType(type) } >{type[1]}</Tab>
            ))
          }</GroupTab>
            {/* <div className="buttons d-flex justify-content-center mb-2">
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
            </div> */}
            {loading ? 
              <Loader/>
             : 
              <ContainerProduts data-testid="listOrders">
                {filter.map((x) => (
                  <React.Fragment key={x._id}>
                    <OrderDiv background='rgb(113 113 113 / 85%)'>
                      <Order type='para llevar' 
                      client={x.client}
                      status={x.status}
                      products={x.products} 
                      createdTime= {x.dateEntry}
                      waitTime={x.updatedAt}>
                      </Order>
                      {/* <p style={{ textTransform: "uppercase" }}>{x.status}</p>
                      <div>{x.client ? <p>Cliente : {x.client}</p> : ""}</div>
                      <b>
                        <p>Productos : </p>
                      </b>
                      {x.products.map((product) => (
                        <div key={product._id}>
                          <p>{product.product.name}</p>

                          <p> Qty : {product.qty}</p>
                          {product.comment ? (
                            <p>Extra :{product.comment} </p>
                          ) : (
                            ""
                          )}
                        </div>
                      ))} */}
                      <div style={{
                        width: '100%',
                        marginTop: '1rem',
                        display:'flex'
                      }}>
                        <ButtonStatus isLoggedIn={x} />
                      </div>
                    </OrderDiv>
                  </React.Fragment>
                ))}
              </ContainerProduts>
            }
          </>
        }
      </Container>
    </div>
  );
};

export default Orders;
