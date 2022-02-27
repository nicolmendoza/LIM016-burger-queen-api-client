import axios from "axios";
import React, { useEffect, useState } from "react";
import Sidebar from "./Navegador";
import "../style-components/profile.css";
import {Button} from "../style-components/components"

const Profile = () => {
  const roleUser = localStorage.getItem("role");
  const url = "https://bq-api-2022.herokuapp.com/users";
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("idUser");

  const [loading, setLoading] = useState(false);
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
      setLoading(true);
    });
  };
  useEffect(() => {
    getProfileInfo();
  }, []);

  const InfoProfile = () => {
    return (
      <>
        <div className="titleDiv">
          <h1>My Profile</h1>
        </div>

        <div className="divImage">
          <img src={user.image} style={{ width: 200, height: 200 }} />
        </div>
        <div className="divEditUser">
          <h2>Info User: </h2>

          <div className="divInfoUser">
            <label>Name: </label>
            <p>{user.nameUser}</p>
          </div>
          <div className="divInfoUser">
            <label>Email: </label>
            <p>{user.email}</p>
          </div>
          <div className="divInfoUser">
            <label>Roles: </label>
            <p>{user.rol}</p>
          </div>
          <div className="divButton">
            <Button color="black" onClick={functionEdit}>Editar</Button>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <Sidebar value={`${roleUser}`}></Sidebar>

      {!loading ? "Loading..." : <InfoProfile></InfoProfile>}
    </>
  );
};

export default Profile;
