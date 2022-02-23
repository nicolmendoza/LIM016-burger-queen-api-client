import axios from "axios";
import React, { useEffect, useState } from "react";
import Sidebar from "./Navegador";
import {
  Button,
  ContainerProduts,
  OrderDiv,
  Container,
} from "../style-components/components";
import "../style-components/editUser.css";

const EditUser = () => {
  const roleUser = localStorage.getItem("role");
  const url = "https://bq-api-2022.herokuapp.com";
  const token = localStorage.getItem("token");
  const id = window.location.pathname.slice(6);
  const initial = {
    email: "",
    password: "",
    nameUser: "",
    roles: "",
    image: "",
  };
  let config = {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
  };
  const [state, setState] = useState(initial);

  useEffect(() => {
    axios.get(`${url}/users/${id}`, config).then((response) =>
      setState(() => ({
        email: response.data.email,

        image: response.data.image,
        nameUser: response.data.nameUser,
      }))
    );
  }, []);

  const options = (e) => {
    // console.log(e.target.value);
    if (e.target.value === "admin") {
      setState((old) => ({
        ...old,
        roles: {
          admin: true,
        },
      }));
    } else {
      setState((old) => ({
        ...old,
        roles: {
          name: e.target.value,
        },
      }));
    }
  };

  const onChangeInput = (e) => {
    setState((old) => ({
      ...old,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    const url = "https://bq-api-2022.herokuapp.com";

    let options = {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: `Bearer ${token}`,
      },
    };
    const res = await axios.put(`${url}/users/${id}`, state, options);

    window.location.href = "/settings";
    console.log(res);
  };
  return (
    <>
      <Sidebar value={`${roleUser}`}></Sidebar>
      <Container>
      <div className="divImage">
        <img src={state.image} style={{ width: 300, height: 300 }}  />
      </div>

      <div className="divEditUser">
        <form onSubmit={onSubmitForm}>
          <div>
            <label>Name:  </label>
            <input
              type="text"
              name="nameUser"
              value={state.nameUser}
              placeholder="Enter email"
              onChange={onChangeInput}
              className="inputText"
            />
          </div>
          <div>
            <label>Image:  </label>
            <input
              type="text"
              name="image"
              value={state.image}
              placeholder="Image"
              onChange={onChangeInput}
              className="inputText"
            />
          </div>
          <div>
            <label>Email:  </label>
            <input
              type="email"
              name="email"
              value={state.email}
              className="inputText"
              placeholder="Enter email"
              onChange={onChangeInput}
            />
          </div>
          <div>
            <label>Password:  </label>
            <input
              type="password"
              name="password"
              value={state.password}
              placeholder="Password"
              onChange={onChangeInput}
              className="inputText"
            />
          </div>
          <fieldset onChange={options} value={state.roles}>
            <h2>Roles</h2>
            <div>
              <label>
                <input type="radio" name="optionsRadios" value="admin" />
                Admin
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="optionsRadios"
                  id="optionsRadios2"
                  value="mesera"
                />
                Meserx
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="optionsRadios"
                  id="optionsRadios3"
                  value="cocinera"
                  disabled=""
                />
                Cocinerx
              </label>
            </div>
          </fieldset>
          <div className="divButton">
            <button type="submit">Guardar</button>
          </div>
        </form>
      </div>
      </Container>
    </>
  );
};

export default EditUser;
