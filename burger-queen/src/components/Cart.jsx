import React from "react";
import { useState } from "react";
import axios from "axios";
import { Button } from "../style-components/components";
import "../style-components/cart.css";
const Cart = ({
  cart,
  setCart,
  addProduct,
  deleteProduct,
  totalFinal,
  setTotalFinal,
}) => {
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

  const productoPrecio = (a, b) => {
    const result = a * b;
    // setTotalFinal([...totalFinal, result]);
    // console.log(totalFinal);
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
    <div className="productsDiv">
      <h1>Carrito de Compras</h1>
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
              <div>
                <div>{x.name}</div>
                <div>{x.qty}</div>
                <img style={{ width: 100, height: 100 }} src={x.image}></img>
                <div>Total : ${productoPrecio(x.qty, x.price, x._id)}</div>
                <div>
                  {x.qty}x{x.price}
                </div>
                <Button onClick={() => addProduct(x)}>+</Button>
                <Button onClick={() => deleteProduct(x)}>-</Button>
                <br></br>
              </div>
            </>
          ))}
      <h4>Total a Pagar :${totalPagar()}</h4>
      <Button onClick={() => postNewOrder()}>ENVIAR</Button>
    </div>
  );
};

export default Cart;
