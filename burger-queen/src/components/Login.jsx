import React, { useState } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import {NavLink} from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded';
import '../style-components/login.css';
import style from 'styled-components'

const Button = style.button`
    background: none;
    border: 1px solid #b2b2b2;
    font-weight: bold;
    font-size: 19px;
    padding: 4px;
    width: 7em;
    background: linear-gradient(#FFFFFF,#313131);
    -webkit-background-clip: text;
    color: transparent;

    &:hover {
      background: linear-gradient(#FFFFFF,#313131);
      color:black;
    }
  
`

const Login = () => {
  const [inputType, setInputType] = useState('password');

  const initial = {
    email: "",
    password: "",
  };

  const [state, setState] = useState(initial);

  const onSubmitForm = (e) => {
    e.preventDefault();
    const values = {
      email: state.email,
      password: state.password,
    };
console.log(state);
    axios
      .post("https://bq-api-2022.herokuapp.com/auth", values)
      .then((response) => {
        const token = response.data.token;
        const decode = jwtDecode(token);
        localStorage.setItem("token", token);
        localStorage.setItem("idUser", decode.uid);

        console.log(decode);
        window.location.href="/admi"
      });
  };

  const onChangeInput = (e) => {
    setState((old) => ({
      ...old,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="login-full-container">
      <nav className="navContainer">
          <NavLink to="/" aria-label="navlogo" className="navlogo">Burguer Queen</NavLink>
      </nav>
      <div className="loginContainer">
        <div className="loginContainer-form">
        <p className="tittle-login">Login</p>
        <form className="login-form" onSubmit={onSubmitForm}>
          <div className="form-section">
          <EmailOutlinedIcon aria-label="iconOpen" className="login-eye-icon" />
            <input
              type="email"
              name="email"
              className="input-form"
              placeholder="name@example.com"
              onChange={onChangeInput}
            />
          </div>
          <div className="form-section">
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
          </div>
          <div className="container-btn">
            <Button type="submit" className="btn-login"> Iniciar </Button>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
