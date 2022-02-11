import React from "react";
import { useState } from "react";
import axios from "axios";
const Cart = ({ cart, setCart, addProduct, deleteProduct }) => {
  const token = localStorage.getItem("token");
  const header = {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
  };

  const [state, setState] = useState({ name: "" });
  const userId = localStorage.getItem("idUser");

  const postNewOrder = () => {
    const array = cart.map((x) => ({
      productId: x._id,
      qty: x.qty,
    }));

    console.log(array);
    const newOrder = {
      client: state.name,
      userId: userId,
      products: array,
    };

    axios
      .post("https://bq-api-2022.herokuapp.com/orders", newOrder, header)
      .then((response) => {
        console.log(response.data);
        setState({ name: "" });
        setCart([]);
      });
  };

  const onChangeInput = (e) => {
    setState({
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h1>----------CARRITO DE COMPRAS--------</h1>
      <input
        placeholder="Nombre del cliente"
        onChange={onChangeInput}
        name="name"
        value={state.name}
      ></input>
      {cart.length === 0
        ? "no hay productos en la lista"
        : cart.map((x) => (
            <>
              <div>{x.name}</div>
              <div>{x.qty}</div>
              <input type="number" value={x.qty}></input>
              <div>
                {x.qty}x{x.price}
              </div>
              <button onClick={() => addProduct(x)}>ADD</button>
              <button onClick={() => deleteProduct(x)}>DELETE</button>
              <br></br>
              <button onClick={() => postNewOrder()}>ENVIAR</button>
            </>
          ))}
    </div>
  );
};

export default Cart;
