import React, { useEffect, useState } from "react";
import axios from "axios";
import { functionRanking } from "../services/ranking";
import LineChart from "../services/graphics";
import BarChart from "../services/graphics";
import StatusChart from "../services/graphics2";
import Sidebar from "./Navegador";

const DashBoard = () => {
  const roleUser = localStorage.getItem("role");

  const [numPedidos, setNumPedidos] = useState("");
  const [ranking, setRanking] = useState([]);
  const [rankingStatus, setRankingStatus] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dataUsers, setDataUsers] = useState([]);
  const token = localStorage.getItem("token");

  let config = {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
  };

  const getOrders = async () => {
    const response = await axios.get(
      "https://bq-api-2022.herokuapp.com/orders?limit=100",
      config
    );
    setDataUsers(response.data);
    console.log(response.data);
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
    localStorage.setItem("ranking", ranking);
    console.log(ranking);
    setRanking(ranking);
    setNumPedidos(response.data.length);

    const resultOrderStatus = response.data.map((x) => x.status).sort();
    const rankingStatus = functionRanking(resultOrderStatus);
    setRankingStatus(rankingStatus);
    setLoading(false);
  };

  useEffect(() => {
    getOrders();
  }, []);

  const Table = () => {
    return (
      <table class="table table-hover">
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
            <tr class="table-active">
              <th scope="row">{x.client}</th>
              <td>
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
      <div style={{ marginLeft: "200px" }}>
        <div>
          {loading ? (
            ""
          ) : (
            <>
              <div style={{ display: "flex" }}>
                <div>
                <div style={{ height: "50px"}}>Números de pedidos:{numPedidos}</div>
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
