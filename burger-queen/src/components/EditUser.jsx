import axios from "axios";
import React, { useEffect, useState} from "react"
import { useParams } from "react-router-dom";
import Sidebar from "./Navegador";
import {Container} from '../style-components/components'
import {Button, ButtonModal, ContentModal, ButtonOrder} from '../style-components/components'
import Modal from "../utils/modal";
import "../style-components/editUser.css";
import back from "../img/back.webp"
import {Label, Input, GroupInput, LeyendaError, DivInput, Form} from '../style-components/elementos/Form' 


const EditUser = () => {
  // const { id } = useParams();
  // console.log(id)
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
    getOneUser()
  }, []);

  const getOneUser = async() => {
    try{
      const response = await axios.get(`${url}/users/${id}`, config)

      setState({
        ...state,
        email: response.data.email,
        image: response.data.image,
        nameUser: response.data.nameUser,
        })
      
    } catch (err){
      console.err(err.message)
    }
    
  }

  const options = (e) => {
    console.log(e.target.value);
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
    console.log(e.target.value)
    setState((old) => ({
      ...old,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    console.log(state);
    const res = await axios.put(`${url}/users/${id}`, state, config);
    console.log(res)

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
  };
  return (
    <>
      <Sidebar value={`${roleUser}`}></Sidebar>
      <Container  background={back}>
      <div className='containerProfile'>
      <div className="divImage">
        <img src={state.image} style={{ width: 180, height: 180 }} />
        <p>{state.nameUser}</p>
      </div>

      <div className="divEditUser">
        <Form onSubmit={onSubmitForm}  width='initial' padding='true'>
          <div className="form-group">
            <Label>Nombre: </Label>
            <Input
              type="text"
              name="nameUser"
              value={state.nameUser}
              placeholder="Enter name"
              onChange={onChangeInput}
              className="inputText"
            />
          </div>
          <div className="form-group">
            <Label>Imagen: </Label>
            <Input
              type="text"
              name="image"
              value={state.image}
              placeholder="Image"
              onChange={onChangeInput}
              className="inputText"
            />
          </div>
          <div className="form-group">
            <Label>Correo: </Label>
            <Input
              type="email"
              name="email"
              value={state.email}
              className="inputText"
              placeholder="Enter email"
              onChange={onChangeInput}
            />
          </div>
          <div  className="group-psd">
          <div className="form-group-psd">
            <Label>Contraseña: </Label>
            <Input
              type="password"
              name="password"
              value={state.password}
              placeholder="**************"
              onChange={onChangeInput}
              className="inputText"
            /></div>
             <LeyendaError valid='false'>Si deseas cambiar de contraseña , escribe tu nueva contarseña,
              de lo contrario permanece tu contraseña actual</LeyendaError>
          </div>

          {localStorage.getItem("role") !== "admin" ? (
            ""
          ) : (
            <div className="group-psd">
            <fieldset onChange={options} value={state.roles}>
              <Label>Roles: </Label>
              <div className='containerRoles'>
              <div>
                <label>
                  <input type="radio" name="optionsRadios" value="admin" className='inputRadio'/>
                  Administrador
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="optionsRadios"
                    id="optionsRadios2"
                    value="mesera"
                    className='inputRadio'
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
                    className='inputRadio'
                  />
                  Cocinerx
                </label>
              </div>
              </div>
            </fieldset>
            </div>
          )}

          <div className="divButton">
            <ButtonOrder type="submit">Guardar</ButtonOrder>
          </div>
        </Form>
      </div>
      </div>
      </Container>
      <Modal
        data-testid='modal'
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
