import axios from "axios";
import React, { useState } from "react";
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from "@mui/material/Modal";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Modal from "../utils/modal";
import {
  Button,
  ButtonModal,
  ContentModal,
} from "../style-components/components";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   height: 500,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   color:"black",
//   p: 10,
// };

const CreateUser = ({ getUsersSave}) => {
  const url = "https://bq-api-2022.herokuapp.com/users";
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
  //const [stateModal, setStateModal] = useState(false);
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
    console.log(e.target.value);
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

    const res = await axios.post(`${url}/users`, state, options);

    console.log(res.data);
    setState({
      email: "",
      password: "",
      roles: "",
      nameUser: "",
    });
    getUsersSave();
  };

  return (

          <ContentModal>
            <form className="container" onSubmit={onSubmitForm}>
              <div className="form-group">
                <label htmlFor="exampleInputImage1" className="form-label mt-4">
                  Name
                </label>
                <input
                  type="text"
                  name="nameUser"
                  value={state.nameUser}
                  className="form-control"
                  id="exampleInputImage1"
                  placeholder="Name"
                  onChange={onChangeInput}
                />
              </div>
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
                <label
                  htmlFor="exampleInputPassword1"
                  className="form-label mt-4"
                >
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
              <div className="form-group">
                <label htmlFor="exampleInputImage1" className="form-label mt-4">
                  Imagen
                </label>
                <input
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
              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  Guardar
                </button>
              </div>
            </form>

          </ContentModal>
  );
};

export default CreateUser;
