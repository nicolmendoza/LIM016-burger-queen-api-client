import axios from "axios";
import React, { useEffect, useState } from "react";
import CreateUser from "./CreateUser";
import {Link} from 'react-router-dom'

const Admi = () => {

  const url = "https://bq-api-2022.herokuapp.com";
  const token = localStorage.getItem("token");
  const header = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const initial = {
    users: [],
  };

  const [state, setSate] = useState(initial);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    axios.get(`${url}/users?limit=20`, header).then((response) =>
      setSate((old) => ({
        ...old,
        users: response.data,
      }))
    );
  };

  const deleteUser = (id) => {
    axios
      .delete(`${url}/users/${id}`, header)
      .then((response) => console.log(response))
      .then(() => getUsers())
      .catch(e => console.log(e))
  };

  const updateUser = async (id) => {
      console.log(id);
    // let options = {
    //   headers: {
    //     "Content-Type": "application/json; charset=utf-8",
    //     Authorization: `Bearer ${token}`,
    //   },
    // };
    // const res = await axios.put(
    //   `${url}/users/${id}`,
    //   {  roles: { admin: true  } },
    //   options
    // );
    // return console.log(res);
    window.location.href="/edit"
  };

  return (
    <div>
      <CreateUser getUsers={getUsers}></CreateUser>
      <div className="container ">
        <h5>Admi</h5>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Tipo</th>
              <th scope="col">Correo</th>
              <th scope="col">Editar</th>
              <th scope="col">Eliminar</th>
            </tr>
          </thead>

          <tbody>
            {state.users.map((user) => (
              <tr className="table-active" key={user._id}>
                <th scope="row">
                  {user.roles.admin
                    ? "Admin"
                    : user.roles.name === "mesera"
                    ? "mesera"
                    : "cocinera"}
                </th>
                <td>{user.email}</td>
                <td>
                  <Link to={"/edit/" + user._id} >Editar</Link>
                  
                </td>
                <td>
                  <button onClick={() => deleteUser(user._id)}>Eliminar</button>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>

  );
};

export default Admi;
