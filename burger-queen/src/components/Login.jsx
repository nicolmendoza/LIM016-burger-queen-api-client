import React, { useState } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import {NavLink} from 'react-router-dom';
import ComponentInput from '../utils/input'
import {Form, Icon, IconEyeClose, IconEye, Lock} from '../style-components/elementos/Form'
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded';
import '../style-components/login.css';
import {Button} from '../style-components/components'

const Login = () => {
  const [inputType, setInputType] = useState('password');
  const initial = {
    campo: "",
    valido: null
  }
  const [correo, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const expReg = {
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  }

  // const initial = {
  //   email: "",
  //   password: "",
  // };

  // const [state, setState] = useState(initial);

  const onSubmitForm = (e) => {
    e.preventDefault();
    const values = {
      email: correo,
      password: password,
    };
    console.log(correo, password);
    axios.post("https://bq-api-2022.herokuapp.com/auth", values)
      .then((response) => {
        const token = response.data.token;
        const decode = jwtDecode(token);
        const rol=(decode.roles.admin===true?"admin":decode.roles.name==="mesera"?"mesera":"cocinera")
        console.log(rol)
        localStorage.setItem("token", token);
        localStorage.setItem("idUser", decode.uid);
        localStorage.setItem("role", rol);
        console.log(decode);
        console.log(decode.roles.name)
        if(decode.roles.name === 'mesera') return  window.location.href="/newOrder";
        if(decode.roles.name === 'cocinera') return  window.location.href="/getOrders";
        return window.location.href="/settings";
      })
  };

  // const onChangeInput = (e) => {
  //   setState((old) => ({
  //     ...old,
  //     [e.target.name]: e.target.value,
  //   }));
  // };

  return (
    <div className="login-full-container">
      <nav className="navContainer">
          <NavLink to="/" aria-label="navlogo" className="navlogo">Burguer Queen</NavLink>
      </nav>
      <div className="loginContainer">
        <p className="tittle-login">Login</p>
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

            {/* {inputType === 'password'
            ? <IconEye onClick={() => setInputType('text')}/>
            : <IconEyeClose onClick={() => setInputType('password')}/>} */}

          {/* <div className="form-section">
            <LockOutlinedIcon aria-label="iconOpen" className="login-eye-icon" />
            <input
              type={inputType}
              name="password"
              placeholder="***************"
              className="input-form"
              onChange={onChangeInput}
              rows="3"
            ></input>
            {inputType === 'password'
                ? <VisibilityOffRoundedIcon onClick={() => setInputType('text')} aria-label="iconOpen" className="login-eye-icon" />
                : <RemoveRedEyeRoundedIcon onClick={() => setInputType('password')} aria-label="iconClose" className="login-eye-icon" />}
          </div> */}
          <div className="container-btn">
            <Button type="submit" className="btn-login"> Iniciar </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
