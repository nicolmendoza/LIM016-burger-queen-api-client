import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, ContainerProduts, OrderDiv, Container} from "../style-components/components";
import Sidebar from './Navegador'

const GetOrders = () => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false)

  const roleUser = localStorage.getItem("role");
  const [filter, setFilter] = useState([]);
  const url = "https://bq-api-2022.herokuapp.com";
  const token = localStorage.getItem("token");

  const header = {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
  };
  useEffect(() => {
    getOrders();
    setLoading(true)
  }, []);

  const getOrders = () => {
    axios.get(`${url}/orders?limit=100`, header).then((response) => {
      console.log(response.data);
      setState(response.data);
      setFilter(response.data.filter((x) => x.status === "pending"));
      setLoading(false)
    });
  };

  const orderLista = (x) => {
    console.log(x);
    axios
      .put(
        `https://bq-api-2022.herokuapp.com/orders/${x}`,
        {
          status: "delivering",
        },
        header
      )
      .then((response) => {
        console.log(response);
      });
      getOrders();
  };

  const filterFunction = (type) => {
    console.log(type);
    const pending = state.filter((x) => x.status === type);
    setFilter(pending);
   
  };
  const FilterOrders = () => {
    return (
      <>
       
        <div className="buttons d-flex justify-content-center mb-2">
          <button
            className="btn btn-outline-dark"
            onClick={() => filterFunction("pending")}
          >
            PENDIENTE
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => filterFunction("delivering")}
          >
            LISTO
          </button>
        </div>
      </>
    );
  };

  return (
    <>
    <Sidebar value={`${roleUser}`}></Sidebar>
    <Container>
    {roleUser === 'mesera'? "No tiene acceso para esta ruta" :
      <>
      <FilterOrders></FilterOrders>
      {loading ? "Cargando..." : 
      <ContainerProduts>
        {filter.map((x) => (
          <OrderDiv key={x._id} className="col-6 col-md-4">
            <p>Cliente : {x.client}</p>
            <p>Status:{x.status}</p>
            {x.products.map((y) => (
              <div>
                Products:
                <p>
                  {y.product.name} Cantidad:{y.qty}
                </p>
              </div>
            ))}
            {x.status === "pending" ? (
              <div>
                <button onClick={() => orderLista(x._id)}>Listo</button>
              </div>
            ) : (
              "Para Entregar"
            )}
          </OrderDiv>
        ))}
      </ContainerProduts>}
      </>}
      </Container>
    </>
  );
};

export default GetOrders;
