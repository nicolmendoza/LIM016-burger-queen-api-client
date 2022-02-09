import axios from "axios";
import React, { useEffect, useState } from "react";
import Cart from "./Cart";

const ProductsPrueba = () => {
  const url = "https://bq-api-2022.herokuapp.com";
  const token = localStorage.getItem("token");
  const options = {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
  };

  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://bq-api-2022.herokuapp.com/products?limit=100", options)
      .then((response) => {
        setProducts(response.data);
        setFilter(response.data);
        setLoading(false);
      });
  }, []);

  const Loading = () => {
    return <div>Loading...</div>;
  };

  const [cart, setCart] = useState([]);
  const addProduct = (product) => {
    const exist = cart.find((x) => x._id === product._id);

    if (exist) {
      return setCart(
        cart.map((x) => (x._id === product._id ? { ...x, qty: x.qty + 1 } : x))
      );
    } else {
      return setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const deleteProduct = (product) => {
    if (product.qty === 1) {
      return setCart(cart.filter((x) => x._id !== product._id));
    } else {
      return setCart(
        cart.map((x) => (x._id === product._id ? { ...x, qty: x.qty - 1 } : x))
      );
    }
  };

  const showAll = () => {
    setFilter(products);
  };

  const filterByType = (type) => {
    setFilter(products.filter((x) => x.type === type));
  };

  const ShowProducts = () => {
    return (
      <div>
        <div className="buttons d-flex justify-content-center mb-2">
          <button className="btn btn-outline-dark" onClick={() => showAll()}>
            ALL
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => filterByType("Desayuno")}
          >
            Desayuno
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => filterByType("Acompañamientos")}
          >
            Acompañamientos
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => filterByType("Bebidas")}
          >
            Bebidas
          </button>
        </div>

        <div>
          {filter.map((x) => (
            <>
              <div>{x.name}</div>
              <div>{x.price}</div>
              <button
              onClick={()=>addProduct(x)}
              >ADD</button>
            </>
          ))}
        </div>
      </div>
    );
  };

  return <div>{loading ? <Loading /> : <ShowProducts />}
  <Cart cart={cart} addProduct={addProduct} deleteProduct={deleteProduct}/>
  </div>;
};

export default ProductsPrueba;
