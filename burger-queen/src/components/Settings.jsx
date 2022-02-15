import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  ContainerProduts,
  OrderDiv,
  Container,
} from "../style-components/components";
import Sidebar from "./Navegador";
import Admi from "./Admi";
import Products from "./Products";

const Settings = () => {
  const roleUser = localStorage.getItem("role");
  const [value, setValue] = useState("users");

  const valueButton = (e) => {
    const valueTarget = e.target.value;
    setValue(valueTarget);
  };

  return (
    <div>
      <Sidebar value={`${roleUser}`}></Sidebar>
      <Container>
        <Button value="users" onClick={valueButton}>
          Users
        </Button>
        <Button value="products" onClick={valueButton}>
          Products
        </Button>
        <div>{value === "users" ? <Admi /> : <Products />}</div>
      </Container>
    </div>
  );
};

export default Settings;
