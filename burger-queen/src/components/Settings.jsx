import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, User, Product } from "../style-components/components";
import Sidebar from "./Navegador";
import Admi from "./Admi";
import Products from "./Products";
import Button2 from "../utils/menuSettings";
import styled, { css } from "styled-components";
import colors from "../style-components/elementos/colors";
import back from "../img/back.webp"

const Settings = () => {

useEffect(()=>{
    if (localStorage.getItem("editProduct")) {
    setLoading(false);
    localStorage.removeItem("editProduct");
    setValue("");
    setLoading(true);
  } else {
    // setLoading(true)
  }
},[])

  const roleUser = localStorage.getItem("role");
  const [value, setValue] = useState("users");
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState("users")
  // const valueButton = (e) => {
  //   console.log(e);
  //   const valueTarget = e.target.value;
  //   setValue(valueTarget);
  // };



  console.log(value);
  return (
    <div>
      <Sidebar value={`${roleUser}`}></Sidebar>
      {!loading ? (
        ""
      ) : (
        <Container>
          <h1>Settings</h1>
          {roleUser !== "admin" ? (
            "No tiene acceso para esta ruta"
          ) : (
            <ContainerSetting>
              <Menu width="250">
                <Button2
                  icon={<User />}
                  title="Usuarios"
                  description="Crear, modificar y eliminar usuarios"
                  value="users"
                  changeState={setValue}
                  active={active}
                  setActive={setActive}
                />
                <Button2
                  icon={<Product />}
                  title="Productos"
                  description="Crear, modificar y eliminar productos"
                  value="products"
                  changeState={setValue}
                  active={active}
                  setActive={setActive}
                />
              </Menu>
              <Menu width="container">
                {value === "users" ? <Admi /> : <Products />}
              </Menu>
            </ContainerSetting>
          )}
        </Container>
      )}
    </div>
  );
};

const ContainerSetting = styled.div`
  display: flex;
  margin: auto 0px;
  height: 93vh;
`;
const Menu = styled.div`
  height: 100%;
  background: ${colors.container};
  margin: auto 0px auto 10px;
  padding: 20px 0px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;

  ${(props) =>
    props.width === "250" &&
    css`
      width: 250px;
    `}

  ${(props) =>
    props.width === "container" &&
    css`
      width: calc(100% - 280px);
    `}
`;

export default Settings;
