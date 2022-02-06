import axios from "axios";
import React, { useEffect, useState } from "react";

const EditUser = () => {
  const url = "https://bq-api-2022.herokuapp.com";
  const token = localStorage.getItem("token");
  const id = window.location.pathname.slice(6);
  const initial = {
    email: "",
    password: "",
    roles: "",
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
        password: response.data.password,
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

    
    window.location.href = "/admi";
    console.log(res);
  };
  return (
    <form className="container" onSubmit={onSubmitForm}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1" className="form-label mt-4">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={state.email}
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          onChange={onChangeInput}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1" className="form-label mt-4">
          Password
        </label>
        <input
          type="password"
          name="password"
          value={state.password}
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          onChange={onChangeInput}
        />
      </div>
      <fieldset className="form-group" onChange={options} value={state.roles}>
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
      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          Guardar
        </button>
      </div>
    </form>
  );
};

export default EditUser;
