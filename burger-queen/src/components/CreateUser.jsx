import axios from "axios";
import React, { useState } from "react";
import {
  Button,
  ButtonModal,
  ContentModal,
  Input, LeyendaError
} from "../style-components/components";
import '../style-components/formCreate.css'
import Loader from "../utils/Loader";
import Modal from "../utils/modal";

const CreateUser = ({ getUsersSave}) => {
  const token = localStorage.getItem("token");
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  const initial = {
    nameUser: "",
    email: "",
    password: "",
    image: "",
    roles: "",
  };

  const bodyModal = {
    title: "",
    body: "Intentelo nuevamente",
  };

  const [state, setState] = useState(initial);
  const [modal, setModal] = useState(bodyModal);
  const [stateModal, setStateModal] = useState(false);
  const [loading, setLoading] = useState(false);
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

  
  const [valid, setValid] = useState('');
  const [validEmail, setValidEmail] = useState('');

  const validation= (e) => {
    //console.log(e.target.name)
    const expReg = {
      password: /^.{4,12}$/, // 4 a 12 digitos.
      correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    }
    if(e.target.name==='email'){
      if(expReg.correo.test(state.email)) {
        setValidEmail('true')
      } else {
        setValidEmail('false')
      }
    }
    if(e.target.name==='password'){
      if(expReg.password.test(state.password)) {
        setValid('true')
      } else {
        setValid('false')
      }
    }
      
  }
  const onChangeInput = (e) => {
    setState((old) => ({
      ...old,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    const url = "https://bq-api-2022.herokuapp.com";

    let options = {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: `Bearer ${token}`,
      },
    };
    try{
      const res = await axios.post(`${url}/users`, state, options);
      setLoading(false)
      //console.log(res.data);
      setState({
            email: "",
            password: "",
            roles: "",
            nameUser: "",
      });
      setStateModal(true)
      setModal({title:'Exito', body:`Usuario creado: ${res.data.email}`})
      getUsersSave()
    } catch(err) {

      setLoading(false)
      setStateModal(true);
      const response = err.response.data
      const message = response.message
      if(message==="no ingresó  email o password") return setModal({title:'Error', body:'Por favor complete todos los datos'})
      if(message==="el formato de la conraaseña o email no es correcto") return setModal({title:'Error', body:'El formato de la contraseña o email es incorrecta'})
      if(message==="ya existe un usuario con ese email") return setModal({title:'Error', body:'Ya existe un usuario con ese email, revise por favor'})
      return setModal({title:'Error', body:'Intentelo de nuevo por favor'})
    }
  };

  const onClick = () => {
    setStateModal(false)
    setLoading(false)
    // getUsersSave()
  }

  return (
          <>
          {!stateModal? 
          <ContentModal>
            {loading? <Loader/> :
            <form className="containerForm" onSubmit={onSubmitForm}>
              <div className="form-group">
                
                <label htmlFor="exampleInputImage1" className="form-label mt-4">
                  Name
                </label>
                <Input
                  type="text"
                  name="nameUser"
                  value={state.nameUser}
                  className="form-control"
                  id="exampleInputImage1"
                  placeholder="Name"
                  onChange={onChangeInput}
                />
              </div>
              <div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1" className="form-label mt-4">
                  Email
                </label>
                <Input
                  type="email"
                  name="email"
                  value={state.email}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={onChangeInput}
                  onKeyUp = {validation}
                  onBlur = {validation}
                />
                
              </div>
              <LeyendaError valid={validEmail}>El correo debe cumplir con el siguiente formato usuario@example.com</LeyendaError>
              </div>
              <div>
              <div className="form-group">
                <label
                  htmlFor="exampleInputPassword1"
                  className="form-label mt-4"
                >
                  Password
                </label>
                <Input
                  type="password"
                  name="password"
                  value={state.password}
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onChange={onChangeInput}
                  onKeyUp = {validation}
                  onBlur = {validation}
                />
                
              </div>
              <LeyendaError valid={valid}>La contraseña debe de tener entre 4 y 16 digitos</LeyendaError>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputImage1" className="form-label mt-4">
                  Imagen
                </label>
                <Input
                  type="text"
                  name="image"
                  value={state.image}
                  className="form-control"
                  id="exampleInputImage1"
                  placeholder="Imagen"
                  onChange={onChangeInput}
                />

              </div>
              <fieldset
              data-testid='options-roles'
                className="form-group"
                onChange={options}
                value={state.roles}
              >
                <legend className="mt-4">Roles</legend>
                <div className="form-check">
                  <label className="form-check-label">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="optionsRadios"
                      id="optionsRadios1"
                      value="admin"
                    />
                    Admin
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="optionsRadios"
                      id="optionsRadios2"
                      value="mesera"
                    />
                    Meserx
                  </label>
                </div>
                <div className="form-check disabled">
                  <label className="form-check-label">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="optionsRadios"
                      id="optionsRadios3"
                      value="cocinera"
                      disabled=""
                    />
                    Cocinerx
                  </label>
                </div>
              </fieldset>
              <Button type="submit" className="btn-login"> Aceptar </Button>
              {/* <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  Guardar
                </button>
              </div> */}
            </form>}
          </ContentModal> :
          <Modal data-testid='modal' state={stateModal} changeState={setStateModal}>
          <ContentModal> 
            <p>{modal.title}</p>
            <p>{modal.body}</p>
            <ButtonModal onClick={onClick}>
              {" "}
              Aceptar{" "}
            </ButtonModal>
          </ContentModal>
        </Modal>}</>
          
  );
};

// const Input = styled.input`
//   width: 100%;
//   height: 45px;
//   border-radius: 3px;
//   line-height: 45px;
//   background: ${props => props.color || 'none'};
//   padding: 0px 30px 0px 29px;
//   border: 2px solid transparent;
//   border-bottom: 1px solid ${color.border};
//   color: #d4d4d4a8;
//   transition: 0.3s ease all;

//   ${props => props.valid === 'false' && css `
//       border: 2px solid ${color.error} !important;
//   `}
// `

// const LeyendaError = styled.p`
//     font-size: 0.8rem !important;
//     margin-bottom: 0;
//     color: ${color.error};
//     display:none

//     ${props => props.valid === 'false' && css `
//         display:block
//     `}
// ` 
export default CreateUser;