import React, { useEffect, useState } from "react";
import axios from "axios";
import { functionRanking } from "./ranking";
import LineChart from "./graphics";
import BarChart from "./graphics";
import StatusChart from "./graphics2";
import Sidebar from "../Navegador";
import { totalGananciasFunction } from "./ranking";
import { display } from "@mui/system";

const DashBoard = () => {
  const roleUser = localStorage.getItem("role");

  const [numPedidos, setNumPedidos] = useState("");
  const [ranking, setRanking] = useState([]);
  const [rankingStatus, setRankingStatus] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dataUsers, setDataUsers] = useState([]);
  const [totalGanancias, setTotalGanancias] = useState("");
  const token = localStorage.getItem("token");

  let config = {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
  };


  useEffect(() => {
    getOrders();
  }, []);


  const getOrders = async () => {
    try{
      const response = await axios.get(
        "https://bq-api-2022.herokuapp.com/orders?limit=100",
        config
      );
      let ganancias = 0;
  
      setTotalGanancias(
        response.data.map(
          (x) =>
            x.products.map((y) => {
              const qty = y.qty;
              const price = y.product.price;
              ganancias += qty * price;
              return ganancias;
            })[x.products.length - 1]
        )[response.data.length - 1]
      );
      setDataUsers(
        response.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        )
      );
      setDataUsers(response.data);
  
      const arrayArrays = response.data.map((x) =>
        x.products.map((y) => y.product.name)
      );
      const result = [];
      for (let i = 0; i < arrayArrays.length; i++) {
        for (let y = 0; y < arrayArrays[i].length; y++) {
          result.push(arrayArrays[i][y]);
        }
      }
      const resultOrder = result.sort();
  
      const ranking = functionRanking(resultOrder);
      setRanking(ranking);
      setNumPedidos(response.data.length);
  
      const resultOrderStatus = response.data.map((x) => x.status).sort();
      const rankingStatus = functionRanking(resultOrderStatus);
      setRankingStatus(rankingStatus);
  
      setLoading(false);
    }catch(err){
console.log(err)
    }
   
  };


  const Table = () => {
    return (
      <table className="table table-hover" data-testid="table">
        <thead>
          <tr>
            <th scope="col">Cliente</th>
            <th scope="col">Menu</th>
            <th scope="col">Total</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {dataUsers.map((x) => (
            <tr className="table-active" >
              <th scope="row" key={x._id}>{x.client}</th>
              <td >
                {x.products.map((y) => (
                  <p>{y.product.name}</p>
                ))}
              </td>
              <td>
                {x.products.map((y) => (
                  <p>{y.product.price * y.qty}</p>
                ))}
              </td>
              <td>{x.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      <Sidebar value={`${roleUser}`}></Sidebar>
      aquiiiiiiiiiiiiiiiiiiiiii
      <div style={{ marginLeft: "100px" }}>
        <div>
          {loading ? (
            ""
          ) : (
            <>
              <div style={{ display: "flex" }}>
                <div>
                  <div style={{display:'flex', flexDirection:'row'}}>
                  <div style={{ width: "50%" }}>
                    Números de pedidos: {numPedidos} Pedidos
                  </div>
                  <div style={{width: "50%" }}>
                    Total de Ganancias: S/. {totalGanancias}
                  </div>
                  </div>
                  <Table />{" "}
                </div>
                <div>
                  <BarChart ranking={ranking} />
                  <StatusChart rankingStatus={rankingStatus} />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
