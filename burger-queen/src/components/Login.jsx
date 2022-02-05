import React, { useState } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";

const Login = () => {


  return (
    <div className="container mt-5">
      <h1 className="text-center">LOGIN</h1>
      <form className="card text-white bg-primary mb-3" >
        <div className="mb-3 primary card-header">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="name@example.com"
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
