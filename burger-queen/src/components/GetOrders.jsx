import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  ContainerProduts,
  OrderDiv,
  Container,
} from "../style-components/components";
import Sidebar from "./Navegador";

const GetOrders = () => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
  }, []);

  const getOrders = () => {
    axios.get(`${url}/orders?limit=100`, header).then((response) => {
      console.log(response.data)
      setState(response.data);
      setFilter(response.data.filter((x) => x.status === "pending"));
      setLoading(false);
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
        // setLoading(true);
        getOrders();
        console.log(response);
      });
   
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

  const time = (a, b) => {
    // console.log(  new Date(a).getTime())
    const timeValue = new Date(b).getTime() - new Date(a).getTime();
    return convert(timeValue);
  };

  const convert = (mss) => {
    var days = parseInt(mss / (1000 * 60 * 60 * 24));
    var hours = parseInt((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.round((mss % (1000 * 60)) / 1000) ;
    return (
      "Tiempo de espera" + "       "+ days + ":" + hours + ":" + minutes + ":" + seconds 
    );
  };

  const handleBackground = (status) => {
    if(status==='pending') return 'rgba(7, 120, 45, 0.35)'
    if(status==='delivering') return 'rgba(112, 114, 22, 0.27)'
  }

  return (
    <>
      <Sidebar value={`${roleUser}`}></Sidebar>
      <Container>
        {roleUser === "mesera" ? (
          "No tiene acceso para esta ruta"
        ) : (
          <>
            <FilterOrders></FilterOrders>
            {loading ? 
              "Cargando..."
            : 
              <ContainerProduts data-testid='list'>
                { filter.length===0?"No hay pedidos en esta sección":  filter.map((x) => (
                  <OrderDiv background={handleBackground(x.status)} key={x._id} className="col-6 col-md-4">
                   <b> <p>Cliente : {x.client}</p></b>
                    <p><b>Status</b>:{x.status}</p>
                    <p><b>Products:</b> </p>
                    {x.products.map((y) => (
                      <div>
                
                        <p>
                          {" * "}{y.product.name}<br></br>  Qty:{y.qty}
                        </p>
                        {(y.comment!==undefined)?<p><b>Extra:</b> {y.comment}</p>:""}
                      </div>
                    ))}

                    <h4><i>{x.status === "pending"
                      ? ""
                      :time(x.dateEntry, x.updatedAt)}</i></h4>
                    <br></br>
                    {x.status === "pending" ? (
                      <div>
                        <Button onClick={() => orderLista(x._id)}>Listo</Button>
                      </div>
                    ) : (
                      <Button>"Para Entregar"</Button>
                    )}
                  </OrderDiv>
                ))}
              </ContainerProduts>
            }
          </>
        )}
      </Container>
    </>
  );
};

export default GetOrders;
