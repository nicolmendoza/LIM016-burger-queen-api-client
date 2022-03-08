import axios from "axios";
import React, { useEffect, useState } from "react";
import { editProduct, getOneProduct } from "../services/products";
import "../style-components/editUser.css";
import Sidebar from "./Navegador";
import {Container} from '../style-components/components'
import {Button, ButtonModal, ContentModal} from '../style-components/components'
import Modal from "../utils/modal";

const EditProduct = () => {
  const roleUser = localStorage.getItem("role");
  console.log(window.location);
  const token = localStorage.getItem("token");
  const id = window.location.pathname.slice(13);
  console.log(id);

  let options = {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
  };

  const bodyModal = {
    title: 'Exito',
    body: "Producto Actualizado"
  }
  
  const [modal, setModal] = useState(bodyModal);
  const [stateModal, setStateModal] = useState(false)
  
  const initial = {
    name: "",
    price: "",
    image: "",
    type: "",
  };

  const [product, setProduct] = useState(initial);

  useEffect((e) => {
    getProduct();
  }, []);

  const getProduct = () => {
    getOneProduct(id, options).then((data) => {
      console.log(data);
      setProduct(data);
    });
  };

  const onChangeInput = (e) => {
    setProduct((old) => ({
      ...old,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await editProduct(id, product, options);
    console.log(res);
    setProduct(res.data)
    setStateModal(true)
  };

  const onClick = () => {
    setStateModal(false)
    window.location.pathname = "/settings"
  }
  return (
    <>
      <Sidebar value={`${roleUser}`}></Sidebar>
      <Container>
      <div className="divImage">
        <img src={product.image} style={{ width: 200, height: 200 }} />
      </div>
      <div className="divEditUser">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre</label>
            <input
              type="text"
              name="name"
              id="exampleInputName"
              value={product.name}
              placeholder="Enter Name"
              onChange={onChangeInput}
              className="inputText"
            />
          </div>
          <div>
            <label>Precio</label>
            <input
              type="number"
              name="price"
              id="exampleInputPrice"
              value={product.price}
              placeholder="Enter price"
              onChange={onChangeInput}
              className="inputText"
            />
          </div>
          <div>
            <label>Imagen</label>
            <input
              type="text"
              name="image"
              id="exampleInputImage"
              value={product.image}
              placeholder="Choose an image"
              onChange={onChangeInput}
              className="inputText"
            />
          </div>
          <div>
            <label>Tipo</label>
            <input
              type="text"
              name="type"
              id="exampleInputType"
              value={product.type}
              placeholder="Enter a type"
              onChange={onChangeInput}
              className="inputText"
            />
          </div>
          <div className="divButton">
            <button>Guardar</button>
          </div>
        </form>
      </div>
      </Container>
      <Modal
        data-testid='modal'
        state = {stateModal}
        changeState = {setStateModal}
      >
        <ContentModal>
          <p>{modal.title}</p>
          <p>{modal.body}</p>
          <p>{product.name}</p>
          <ButtonModal onClick={() => onClick()}> Aceptar </ButtonModal>
        </ContentModal>
      </Modal>
    </>
  );
};

export default EditProduct;
