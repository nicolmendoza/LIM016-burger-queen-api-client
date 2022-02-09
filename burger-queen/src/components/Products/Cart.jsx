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

const Cart = ({ cart, addProduct, deleteProduct , setCart}) => {
  const postNewOrder = (e) => {
    e.preventDefault();
  };

  const [name, setName] = useState({
    name:""
  });

  const onInputChange = (e) => {
    console.log(e.target.value);
    setName({name:e.target.value});
  };

  const userId = localStorage.getItem("idUser");
  console.log(userId);

  const postOrder = () => {
    const arrayOrder = cart.map((x) => {
      return {
        productId: x._id,
        qty: x.qty,
      };
    });
    // console.log(arrayOrder);
    const newOrder = {
      client: name.name,
      userId: userId,
      products: arrayOrder,
    };
    console.log(newOrder);

    axios
      .post("https://bq-api-2022.herokuapp.com/orders",  newOrder,options)
      .then((response) => {
        console.log(response);
  
      }).catch(error=>console.log(error))
     setName({name:""});

  };

  return (
    <div>
      <h5>PEDIDOS</h5>

      <input 
      placeholder="nombre del cliente" 
      onChange={onInputChange}
      name="name"
      value={name.name}
      ></input>
      <br></br>
      {cart.length === 0
        ? "No hay productos a ordenar"
        : cart.map((x) => (
            <div>
              <p>{x.name}</p>
              <p>{x.qty}</p>
              <button onClick={() => addProduct(x)}>ADD</button>
              <button onClick={() => deleteProduct(x)}>Delete</button>
            </div>
          ))}
      <button type="submit" onClick={() => postOrder()}>
        Ordernar
      </button>
    </div>
  );
};

export default Cart;
