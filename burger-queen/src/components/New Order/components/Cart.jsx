import React from "react";
import { useState } from "react";
import axios from "axios";
import { Button } from "../../../style-components/components";
import "../../../style-components/cart.css";
import {ContainerCart, ButtonCart, Item, ListOrden} from './style.js'
import Input from './input.jsx'

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
    console.log(cart);
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

  const changeQty = (e) => {
    console.log(parseInt(e.target.value))
    setCart(
      cart.map((x) => {
        return { ...x, qty: parseInt(e.target.value) };
      })
    )
  }
  const deleteItem = (e) => {
    const id=e.target.id
    console.log(id.parentNode)
  }

  return (
    <ContainerCart>
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
          <ButtonCart padding='0.5rem 0.7rem'> Local </ButtonCart>
          <ButtonCart padding='0.5rem 0.7rem'> P. llevar </ButtonCart>
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
          <React.Fragment key={`id-${x._id}`}>
          <Item className={`id-${x._id}`}>
            <img src={x.image} style={{ width: 50, height: 50 }} alt={x.name} />
            <div>
              <p>{x.name}</p>
              <p>s/{x.price}</p>
            </div>
            <input className='Qty' type='text' onChange={changeQty} placeholder='0'/>
            <p>s/{productoPrecio(x.qty, x.price, x._id)}</p>
            <input
                placeholder="Añade un extra"
                onChange={onChangeInput}
                name={x._id}
                className='comment'
            />
            <button className="fa-regular fa-trash-can" id={`id-${x._id}`} onClick={deleteItem}/>
          </Item>
                {/* <div className="productCart">
                 <h6>Cantidad:{x.qty}</h6>
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
              </div> */}
          </React.Fragment>
          ))}
      </ListOrden>
      <div className='footer-Cart'>
        <h4>Total a Pagar :${totalPagar()}</h4>
        <ButtonCart padding="14px" onClick={() => postNewOrder()}>Generar Orden </ButtonCart>
      </div>
      
    </ContainerCart>
  );
};

export default Cart;
