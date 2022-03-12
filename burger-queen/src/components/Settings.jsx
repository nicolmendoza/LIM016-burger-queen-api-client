import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container } from "../style-components/components";
import Sidebar from "./Navegador";
import Admi from "./Admi";
import Products from "./Products";
import Button2 from '../utils/menuSettings'
import styled, {css} from 'styled-components'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import colors from '../style-components/elementos/colors'

const Settings = () => {
  const roleUser = localStorage.getItem("role");
  const [value, setValue] = useState("users");

  const valueButton = (e) => {
    console.log(e)
    const valueTarget = e.target.value;
    setValue(valueTarget);
  };
  console.log(value)
  return (
    <div>
      <Sidebar value={`${roleUser}`}></Sidebar>
      <Container>
        <h1>Settings</h1>
        {roleUser !== 'admin'? "No tiene acceso para esta ruta" :
        <ContainerSetting>
          <Menu width="250">
            <Button2 
              icon={<AccountCircleIcon/>} 
              title="Usuarios" 
              description="Crear, modificar y eliminar usuarios"
              value="users"
              changeState={setValue}
              
              />
            <Button2 
              icon={<FastfoodIcon/>} 
              title="Productos" 
              description="Crear, modificar y eliminar productos"
              value="products"
              changeState={setValue} 
              />
          </Menu>
          <Menu width="container" >
            {value === "users" ? <Admi  /> : <Products />}
          </Menu>
        </ContainerSetting> }        
      </Container>
    </div>
  );
};

const ContainerSetting = styled.div`
    display:flex;
    margin: auto 0px;
    height: 93vh;
`
const Menu = styled.div`    
    height:100%;
    background: ${colors.container};
    margin: auto 0px auto 10px;
    padding: 20px 0px;
    border-radius: 10px;
    display:flex;
    flex-direction:column;

    ${props => props.width === '250' && css `
        width: 250px;
    `}

    ${props => props.width === 'container' && css `
      width: calc(100% - 280px);
    `}
`




export default Settings;
