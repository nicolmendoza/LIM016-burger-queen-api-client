import React from "react";
import { useState } from "react";
import axios from "axios";
import { Button } from "../../../style-components/components";
import "../../../style-components/cart.css";
import {ContainerCart} from './style.js'

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
  const [client, setClient] = useState({ name: "" });
  const userId = localStorage.getItem("idUser");

  const postNewOrder = () => {
    // console.log(cart);
    // //  setCart([...cart, { ...product, qty: 1 }]);
    // console.log(cart);
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

    axios
      .post("https://bq-api-2022.herokuapp.com/orders", newOrder, header)
      .then((response) => {
        console.log(response.data);
        setClient({ name: "" });
        setCart([]);
      });
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

    // );
    console.log(cart);
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
    <ContainerCart>
      <h3>Carrito de Compras</h3>
      <div className="inputClient">
        <h3>Cliente:</h3>
        <input
          placeholder="Nombre del cliente"
          onChange={onChangeInput}
          name="name"
          value={client.name}
        ></input>
      </div>
      <h4>Productos :</h4>
      {cart.length === 0
        ? "No hay productos en la lista"
        : cart.map((x) => (
            <>
              <h6>{x.name}</h6>
              <div className="productCart">
                {/* <h6>Cantidad:{x.qty}</h6> */}
                <img style={{ width: 50, height: 50 }} src={x.image}></img>

                <div className="btnQty">
                  <Button onClick={() => addProduct(x)}>+</Button>
                  <h4>{x.qty}</h4>
                  <Button onClick={() => deleteProduct(x)}>-</Button>
                  <div className="comment">
                    <input
                      placeholder="Añade un extra"
                      onChange={onChangeInput}
                      name={x._id}
                    ></input>
                  </div>
                </div>
                <h6>Total : ${productoPrecio(x.qty, x.price, x._id)}</h6>

                <br></br>
              </div>
            </>
          ))}
      <h4>-------------------------</h4>
      <h4>Total a Pagar :${totalPagar()}</h4>
      <Button onClick={() => postNewOrder()}>ENVIAR</Button>
    </ContainerCart>
  );
};

export default Cart;
