import React, { useState } from "react";
import { singIn } from "../services/users";
import {NavLink} from 'react-router-dom';
import ComponentInput from '../utils/input'
import {Form, Icon, IconEyeClose, IconEye, Lock} from '../style-components/elementos/Form'
import '../style-components/login.css';
import {Button, ButtonModal, ContentModal} from '../style-components/components'
import Modal from "../utils/modal";
import logo from '../img/Burger House.png'
import banner from '../img/burger-baner.png'

const Login = () => {
  const [inputType, setInputType] = useState('password');
  const bodyModal = {
    title: '',
    body: "Intentelo nuevamente"
  }
  const [loading, setLoading] = useState(false)
  const [correo, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modal, setModal] = useState(bodyModal);
  const [stateModal, setStateModal] = useState(false)

  const expReg = {
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  }

  const onSubmitForm = async (e) => {
    setLoading(true)
    e.preventDefault();
    const values = {
      email: correo,
      password: password,
    };

    await singIn(values, setModal, setStateModal)

      setLoading(false)
      setEmail('')
      setPassword('')
  };


  return (
    <div className="login-full-container">
      <nav className="navContainer">
        <a href="/" className="logo"><img src={logo} alt=""/></a>
          {/* <NavLink to="/" aria-label="navlogo" className="navlogo">Burguer Queen</NavLink> */}
      </nav>
      
      <div className="loginContainer">
      {/* {loading ? "Cargando..." : ""} */}

        <Form action="" onSubmit={onSubmitForm}>
          <ComponentInput
            icon={<Icon />}
            type="text"
            label="Email"
            placeholder="usuario@example.com"
            name="email"
            error="El correo debe cumplir con el siguiente formato usuario@example.com"
            expReg = {expReg.correo}
            estado={correo}
            changeState={setEmail}
          />
          <ComponentInput
            icon={<Lock/>}
            type={inputType}
            label="Password"
            placeholder="******************"
            name="password"
            error="La contraseña debe de tener entre 4 y 16 digitos"
            expReg = {expReg.password}
            estado={password}
            changeState={setPassword}
            eye={inputType === 'password'
            ? <IconEye onClick={() => setInputType('text')}/>
            : <IconEyeClose onClick={() => setInputType('password')} />}
            />
          <div className="container-btn">
            <Button type="submit" className="btn-login"> Iniciar </Button>
          </div>
        </Form>
      </div>
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
    </div>
  );
};

export default Login;
