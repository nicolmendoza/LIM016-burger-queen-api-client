import React, { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const url = "https://bq-api-2022.herokuapp.com";
  const token = localStorage.getItem("token");
  const options = {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
  };

  const initial = {
    products: [],
  };

  const [state, setState] = useState();

  useEffect(() => {
    axios.get(`${url}/products`, options).then((response) =>
      setState((old) => ({
        ...old,
        products: response.data,
      }))
    );
  }, []);

  return (<div></div>);
};

export default Products;
