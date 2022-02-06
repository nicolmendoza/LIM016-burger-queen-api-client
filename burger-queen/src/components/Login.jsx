import React, { useState } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";

const Login = () => {
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
    <div className="container mt-5">
      <h1 className="text-center">LOGIN</h1>
      <form className="card text-white bg-primary mb-3" onSubmit={onSubmitForm}>
        <div className="mb-3 primary card-header">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="name@example.com"
            onChange={onChangeInput}
          />
        </div>
        <div className="mb-3 card-body">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="***************"
            className="form-control"
            onChange={onChangeInput}
            rows="3"
          ></input>
        </div>
        <div>
          <button type="submit" className=" btn btn-danger">
            Iniciar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
