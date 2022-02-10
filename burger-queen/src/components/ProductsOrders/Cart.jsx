import axios from "axios";
import React, { useState } from "react";

const url = "https://bq-api-2022.herokuapp.com";
const token = localStorage.getItem("token");
const options = {
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Authorization: `Bearer ${token}`,
  },
};

const Cart = ({cart,deleteProduct,addProduct}) => {
  return (<div>
    <p>-----------CARRITO DE COMPRAS----------------</p>
    {cart.map(x=>(
      <>
      <div>{x.name}</div>
      <div>{x.qty}</div>
      <button
      onClick={()=>addProduct(x)}>ADD</button>
      <button
      onClick={()=>deleteProduct(x)}
      >DELETE</button>
      </>
    ))}
  </div>);
};

export default Cart;
