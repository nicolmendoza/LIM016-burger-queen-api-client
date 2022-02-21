import axios from "axios";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CreateUser = ({ getUsers }) => {
  const url = "https://bq-api-2022.herokuapp.com/users";
  const token = localStorage.getItem("token");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const initial = {
    nameUser: "",
    email: "",
    password: "",
    roles: "",
  };

  const [state, setState] = useState(initial);

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
    handleClose();
    console.log(state)
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
    });
    getUsers(url);
  };
  return (
    <div>
      <h5>Create USERs</h5>

      <div>
        <Button onClick={handleOpen}>CREATE USERS</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <form className="container" onSubmit={onSubmitForm}>
              <div className="form-group">
                <label
                  htmlFor="exampleInputPassword1"
                  className="form-label mt-4"
                >
                  Name
                </label>
                <input
                  // type="name"
                  name="nameUser"
                  value={state.Username}
                  className="form-control"
                  id="exampleInputName"
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
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default CreateUser;
