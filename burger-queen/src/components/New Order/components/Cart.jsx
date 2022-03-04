import React from "react";
import { useState } from "react";
import axios from "axios";
import {
  Button,
  ButtonModal,
  ContentModal,
} from "../../../style-components/components";
import "../../../style-components/cart.css";
import {ContainerCart, ButtonCart, Item, ListOrden, ButtonClear} from './style.js'
import Input from './input.jsx'
import Modal from "../../../utils/modal";


const Cart = ({
  cart,
  setCart,
  deleteProduct,
  totalFinal,
  setTotalFinal,
  changeQty
}) => {
  const token = localStorage.getItem("token");
  const header = {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
  };
  const [client, setClient] = useState({ name: "" });
  const userId = localStorage.getItem("idUser");

  const bodyModal = {
    title: "Orden Creada",
    body: "",
  };
  const [modal, setModal] = useState(bodyModal);
  const [stateModal, setStateModal] = useState(false);

  const postNewOrder = async() => {

    const array = cart.map((x) => ({
      productId: x._id,
      qty: x.qty,
      comment: x.comment,
    }));

    // console.log(array);
    const newOrder = {
      client: client.name,
      userId: userId,
      products: array,
      // comment: state.comment,
    };
    try{
      await axios.post("https://bq-api-2022.herokuapp.com/orders", newOrder, header)
      setClient({ name: "" });
      setCart([]);
      setModal({...modal, body:`Cliente: ${newOrder.client}`})
      setStateModal(true);
    } catch(err){
      setModal({title:'Error'})
      setStateModal(true);
    }
    
  };

  const onChangeInput = (e) => {
    setClient({
      ...client,
      [e.target.name]: e.target.value,
    });

    const findComment = (ID) => {
      const arrayid = Object.keys(client).filter((y) => y === ID);
      const id = arrayid[0];
      return client[id];
    };

    setCart(
      cart.map((x) => {
        return { ...x, comment: findComment(x._id) };
      })
    );

    // // );
    // console.log(cart);
  };

  const productoPrecio = (a, b) => {
    const result = a * b;
    return result;
  };

  const totalPagar = () => {
    const array = cart.map((x) => x.price * x.qty);
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
      suma += array[i];
    }
    return suma;
  };

  return (
  <>
    <ContainerCart data-testid='containerCart'>
      <div className='header-cart'>
        <h>Ordenes</h>
        <div className="inputClient">
          <h>Cliente:</h>
          <input
            placeholder="Nombre del cliente"
            onChange={onChangeInput}
            name="name"
            value={client.name}
          />
        </div>
        <div className="cart-button">
          <ButtonClear padding='0.5rem 0.7rem'> Local </ButtonClear>
          <ButtonClear padding='0.5rem 0.7rem'> P. llevar </ButtonClear>
        </div>
        <div className='header-list'>
          <p>Item</p>
          <p>Qty</p>
          <p>Price</p>
        </div>
      </div>
      <ListOrden>
        {cart.length === 0
        ? "No hay productos en la lista"
        : cart.map((x) => (
          <Item id={`id-${x._id}`} data-testid={`id-${x._id}`}>
            <img src={x.image} style={{ width: 50, height: 50 }} alt={x.name} />
            <div>
              <p>{x.name}</p>
              <p>s/{x.price}</p>
            </div>
            <input className='Qty' type='number' onChange={(e)=>changeQty(x, e)} value={isNaN(x.qty)? '':x.qty} placeholder='0'/>
            <p className='totalPrice'>s/{productoPrecio(x.qty, x.price, x._id)}</p>
            <input
                placeholder="Añade un extra"
                onChange={onChangeInput}
                name={x._id}
                className='comment'
            />
            <ButtonClear className="fa-regular fa-trash-can" onClick={() => deleteProduct(x)} data-testid={`delete-${x.name}`} />
          </Item>
          ))}
      </ListOrden>
      <div className='footer-Cart'>
        <div className='totalPrice'>
          <p>Total:</p>
          <p>s/. {totalPagar()}</p>
        </div>
        <ButtonCart padding="12px" onClick={() => postNewOrder()}>Generar Orden </ButtonCart>
      </div>
    </ContainerCart>
      <Modal data-testid='modal' state={stateModal} changeState={setStateModal}>
        <ContentModal>
          <p>{modal.title}</p>
          <p>{modal.body}</p>
          <ButtonModal onClick={() => setStateModal(false)}>
            {" "}
            Aceptar{" "}
          </ButtonModal>
        </ContentModal>
      </Modal>
    </>
  );
};

export default Cart;
