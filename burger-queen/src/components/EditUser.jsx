import axios from "axios";
import React, { useEffect, useState } from "react";
import Sidebar from "./Navegador";
import {Container} from '../style-components/components'
import {Button, ButtonModal, ContentModal} from '../style-components/components'
import Modal from "../utils/modal";
import "../style-components/editUser.css";



const EditUser = () => {
  const roleUser = localStorage.getItem("role");
  const url = "https://bq-api-2022.herokuapp.com";
  const token = localStorage.getItem("token");
  const id = window.location.pathname.slice(6);

const bodyModal = {
  title: '',
  body: "Usuario Actualizado"
}

  const [modal, setModal] = useState(bodyModal);
  const [stateModal, setStateModal] = useState(false)

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
          admin:false
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
    console.log(state);
    const res = await axios.put(`${url}/users/${id}`, state, options);


    // localStorage.setItem("role", rol);
    const dataRoles=res.data.roles
    const rol=(dataRoles.admin===true?"admin":dataRoles.name==="mesera"?"mesera":"cocinera")
    console.log(rol)


    if (localStorage.getItem("role") == "admin") {
      const idUser=localStorage.getItem('idUser')
      if(idUser==id){
        localStorage.setItem("role", rol);
      }
      setStateModal(true)
      return (window.location.href = "/settings");
    } else {
      localStorage.setItem("role", rol);
      setStateModal(true)
      return (window.location.href = "/profile");
    }
   
    console.log(res);
  };
  return (
    <>
      <Sidebar value={`${roleUser}`}></Sidebar>
      <Container>
      <div className="divImage">
        <img src={state.image} style={{ width: 180, height: 180 }} />
      </div>

      <div className="divEditUser">
        <form onSubmit={onSubmitForm}>
          <div>
            <label>Name: </label>
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
            <label>Image: </label>
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
            <label>Email: </label>
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
            <label>Password: </label>
            <input
              type="password"
              name="password"
              value={state.password}
              placeholder="Password"
              onChange={onChangeInput}
              className="inputText"
            /><br></br>
            <h5>*** Si deseas cambiar de contraseña , escribe tu nueva contarseña,
        de lo contrario permanece tu contraseña actual .{" "}</h5>
          </div>

          {localStorage.getItem("role") !== "admin" ? (
            ""
          ) : (
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
          )}

          <div className="divButton">
            <Button type="submit">Guardar</Button>
          </div>
        </form>
      </div>
      </Container>
      <Modal
        state = {stateModal}
        changeState = {setStateModal}
      >
        <ContentModal>
          <p>{modal.title}</p>
          <p>{modal.body}</p>
          <ButtonModal onClick={() => setStateModal(false)}> Aceptar </ButtonModal>
        </ContentModal>
      </Modal>
    </>
  );
};

export default EditUser;
