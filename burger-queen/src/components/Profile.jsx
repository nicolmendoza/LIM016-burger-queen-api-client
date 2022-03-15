import axios from "axios";
import React, { useEffect, useState } from "react";
import Sidebar from "./Navegador";
import "../style-components/profile.css";
import { Button, Container, ButtonOrder } from "../style-components/components.js";
import Loader from "../utils/Loader";
import back from "../img/back.webp"

const Profile = () => {
  const roleUser = localStorage.getItem("role");
  const url = "https://bq-api-2022.herokuapp.com/users";
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("idUser");

  const actions = [
    {
      role: "admin",
      action:
        "Administrar productos, usuarios y ordenes. Generar ordenes , ver sus estados y poder cambiarlas . ",
    },
    {
      role: "mesera",
      action:
        "Puedes generar ordenes, cambiarlas de estado, y editar tu información. ",
    },
    {
      role: "cocinera",
      action:
        "Puedes cambiar de estado las ordenes  y editar tu informacion personal ",
    },
  ];

  const funciones = () => {
    const role = localStorage.getItem("role");
    const actionUser = actions.find((x) => x.role == role);
    return actionUser.action;
  };

  funciones();

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({
    email: "",
    rol: "",
    image: "",
    nameUser: "",
    password: "",
  });

  const functionEdit = () => {
    window.location.href = "edit/" + id;
  };

  const header = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const getProfileInfo = () => {
    axios.get(`${url}/${id}`, header).then((response) => {
      setLoading(false);
      setUser({
        ...user,
        email: response.data.email,
        rol:
          response.data.roles.admin === true
            ? "Administrador"
            : response.data.roles.name === "mesera"
            ? "Mesera"
            : "Cocinera",
        image: response.data.image,
        nameUser: response.data.nameUser,
      });
      
    });
  };
  useEffect(() => {
    getProfileInfo();
  }, []);

  const InfoProfile = () => {
    return (
        <div className='containerProf'>
        <div className="titleDiv">
          <h1>Mi Perfil</h1>
        </div>
        
        <div className="divImage">
          <img src={user.image} style={{ width: 200, height: 200 }} />
        </div>
        <div className="div-containerProfile">
          <h2>Información personal: </h2>

          <div className="divInfoUser">
            <label>Nombre: </label>
            <p>{user.nameUser}</p>
          </div>
          <div className="divInfoUser">
            <label>Email: </label>
            <p>{user.email}</p>
          </div>
          <div className="divInfoUser">
            <label>Rol: </label>
            <p>{user.rol}</p>
          </div>
          <div className="divInfoUser">
            <label>Funciones: </label>
            <p>{funciones()}</p>
          </div>
          <div className="divButton">
            <ButtonOrder width="30%" onClick={functionEdit}>
              Editar
            </ButtonOrder>
          </div>
        </div>
        </div>
    );
  };

  return (
    <>
      <Sidebar value={`${roleUser}`}></Sidebar>
      <Container background={back} valid='true'>
      {loading ? <Loader/> : <InfoProfile></InfoProfile>}
      </Container>
    </>
  );
};

export default Profile;
