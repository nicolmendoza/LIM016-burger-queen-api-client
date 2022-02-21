import axios from "axios";
import React, { useEffect, useState } from "react";
import Sidebar from './Navegador'
import '../style-components/profile.css'
const Profile = () => {
  const roleUser = localStorage.getItem("role");
  const url = "https://bq-api-2022.herokuapp.com/users";
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("idUser");
  console.log(id);

  const [user, setUser] = useState({
    email: "",
    rol: "",
  });

  const header = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
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
      });
    });
  }, []);

  console.log(user);
  return (
    <>
          <Sidebar value={`${roleUser}`}></Sidebar>
      <div className="container">
        <h2>PROFILE</h2>
        <img src="img/chef.png" style={{ width: 100, height: 100 }}></img>
        <h5>Email:{user.email}</h5>
        <h5>Rol:{user.rol}</h5>
      </div>
    </>
  );
};

export default Profile;
