import axios from "axios";
import React, { useEffect, useState } from "react";
import CreateUser from "./CreateUser";
import { Link } from "react-router-dom";
import {
  Button3,
  ContainerElements,
  DivElement,
  ButtonMenu,
} from "../style-components/components";
import { getAllProducts, deleteProduct } from "../services/products";
import DivData from "../utils/Container-Data";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Modal from "../utils/modal";


const Admi = () => {
  const url = "https://bq-api-2022.herokuapp.com/users";
  const token = localStorage.getItem("token");

  const [newUrl, setUrl] = useState(url);
  const roleUser = localStorage.getItem("role");

  const header = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const initial = {
    users: [],
  };

  const initialLink = {
    first: "",
    prev: "",
    next: "",
    last: "",
  };
  const [page, setPage] = useState(initialLink);
  const [loading, setLoading] = useState(true);
  const [state, setSate] = useState(initial);
  const [stateModal, setStateModal] = useState(false);

  useEffect(() => {
    setLoading(true)
    getUsers(newUrl);
   
  }, []);

  const getUsers = (newUrl) => {getAllProducts(newUrl, header)
   

  };

  const getAllProducts = async (url, header) => {
    try {
      const res = await axios.get(`${url}?limit${100}`, header);
      console.log(res);
      const link = res.headers.link;
      console.log(link);
      const arrayLink = link.match(
        /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi
      );
      setPage({
        ...page,
        first: arrayLink[0],
        prev: arrayLink[1],
        next: arrayLink[2],
        last: arrayLink[3],
      });
      setSate({...state,
        users: res.data,
      });
      setLoading(false)
      return res;
    } catch (err) {
      console.log(err);
    }
  };

  const getUsersSave = () =>{
    getAllProducts(newUrl, header);
 
  }
  

    

  const handlePagination = (e) => {
    console.log(e.target.value);
    let pageNumber = e.target.value;
    getUsers(pageNumber);
    setUrl(pageNumber);
  };

  const deleteUser = async (id) => {
    const res = await axios.delete(`${url}/${id}`, header);
    console.log(res);
    getUsers(newUrl);
  };

  const onClick = () => {
    console.log("hi");
    setStateModal(true);
  };

  return (
    <>
    <div>
      <h1>USUARIOS</h1>
      <div className="btn-next-prev">
        <ButtonMenu
          type="submit"
          className="btn-login"
          value={page.prev}
          onClick={handlePagination}
        >
          {" "}
          Prev{" "}
        </ButtonMenu>
        <ButtonMenu
          type="submit"
          className="btn-login"
          value={page.next}
          onClick={handlePagination}
        >
          {" "}
          Next{" "}
        </ButtonMenu>
      </div>
      {loading ? 
        "Cargando..."
       : (
        <ContainerElements data-testid="list">
          <DivElement>
            <AddCircleOutlineIcon onClick={() => onClick()} />
            <p>Add new user</p>
          </DivElement>

          {state.users.map((user) => (
            <DivData data={user}>
              <div key={`${user._id}-"id"`}>
                <h2>{user.nameUser}</h2>
                <p>{user.email}</p>
                <p>{user.roles.name}</p>
              </div>
              <div className="btn-container">
                <Button3
                  color="black"
                  padding="0.2rem 0.5rem"
                  onClick={() => {
                    window.location.href = `/edit/${user._id}`;
                  }}
                >
                  Editar
                </Button3>
                <Button3
                  color="black"
                  padding="0.2rem 0.5rem"
                  onClick={() => deleteUser(user._id)}
                >
                  Eliminar
                </Button3>
              </div>
            </DivData>
          ))}
        </ContainerElements>
      )}
    </div>
    <Modal state={stateModal} changeState={setStateModal}>
    <CreateUser getUsersSave={getUsersSave}></CreateUser>
    </Modal> 
    </>
  );
};

export default Admi;
