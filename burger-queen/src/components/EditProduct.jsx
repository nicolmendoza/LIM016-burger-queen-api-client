
import React, { useEffect, useState } from "react";
import { editProduct, getOneProduct } from "../services/products";
import "../style-components/editUser.css";
import Sidebar from "./Navegador";
import { Container } from "../style-components/components";
import {
  ButtonModal,
  ContentModal, ButtonOrder
} from "../style-components/components";
import Modal from "../utils/modal";
import {Label, Input, Form} from '../style-components/elementos/Form' 
import back from "../img/back.webp"


const EditProduct = () => {
  const roleUser = localStorage.getItem("role");
  //console.log(window.location);
  const token = localStorage.getItem("token");
  const id = window.location.pathname.slice(13);
  //console.log(id);

  let options = {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
  };

  const bodyModal = {
    title: "Exito",
    body: "Producto Actualizado",
  };

  const [modal, setModal] = useState(bodyModal);
  const [stateModal, setStateModal] = useState(false);

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
      //console.log(data);
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
    localStorage.setItem("editProduct", true);
    const res = await editProduct(id, product, options);
    
    setProduct(res.data);
    setStateModal(true);
  };

  const onClick = () => {
    setStateModal(false);
    window.location.pathname = "/settings";
  };
  return (
    <>
      <Sidebar value={`${roleUser}`}></Sidebar>
      <Container  background={back}>
        {/* <h1 style={{display:'flex', justifyContent:'center', marginTop:'30px'}}>Editar Producto</h1> */}
        <div className='containerProfile'>
        <div className="divImage">
          <img src={product.image} style={{ width: 200, height: 200 }} alt= {product.name} /> 
          <p>{product.name}</p>
        </div>
        <div className="divEditUser">
          <Form onSubmit={handleSubmit} width='initial' padding='true'>
            <div className="form-group">
              <Label>Nombre</Label>
              <Input
                type="text"
                name="name"
                id="exampleInputName"
                value={product.name}
                placeholder="Enter Name"
                onChange={onChangeInput}
                className="inputText"
              />
            </div>
            <div className="form-group">
              <Label>Precio</Label>
              <Input
                type="number"
                name="price"
                id="exampleInputPrice"
                value={product.price}
                placeholder="Enter price"
                onChange={onChangeInput}
                className="inputText"
              />
            </div>
            <div className="form-group">
              <Label>Imagen</Label>
              <Input
                type="text"
                name="image"
                id="exampleInputImage"
                value={product.image}
                placeholder="Choose an image"
                onChange={onChangeInput}
                className="inputText"
              />
            </div>
            <div className="form-group">
              <Label>Tipo</Label>
              <Input
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
              <ButtonOrder>Guardar</ButtonOrder>
            </div>
          </Form>
        </div>
        </div>
      </Container>
      <Modal data-testid="modal" state={stateModal} changeState={setStateModal}>
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
