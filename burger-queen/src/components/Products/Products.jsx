import axios from "axios";
import React, { useEffect, useState } from "react";
import Cart from "./Cart";

const Products = () => {
  const url = "https://bq-api-2022.herokuapp.com";
  const token = localStorage.getItem("token");
  const options = {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
  };

  const [cart, setCart] = useState([]);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState([]);

  let componentMounted = true;

  useEffect(() => {
    function axiosFunction() {
      setLoading(true);

      axios
        .get(`https://bq-api-2022.herokuapp.com/products?limit=100`, options)
        .then((response) => {
          console.log(response);
          if (componentMounted) {
            setProducts(response.data);
            setFilter(response.data);
            setLoading(false);
          }
        });
      return () => {
        componentMounted = false;
      };
    }
    axiosFunction();
  }, []);

  const Loading = () => {
    return <div>Loading...</div>;
  };

  const ShowAll = () => {
    setFilter(products);
  };

  const filterByType = (tipo) => {
    const arrayFilter = products.filter((x) => x.type === tipo);
    setFilter(arrayFilter);
  };

  const addProduct = (product) => {
    const exits = cart.find((x) => x._id === product._id);

    if (exits) {
      setCart(
        cart.map((x) => (x._id === product._id ? { ...x, qty: x.qty + 1 } : x))
      );
    } else {
      return setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const deleteProduct = (product) => {
    const exits = cart.find((x) => x._id === product._id);
console.log(product);
    if (exits.qty === 1) {
        console.log(1);
      return setCart(cart.filter((x) => x._id !== product._id));
    } else {
      return setCart(
        cart.map((x) => x._id === product._id ? { ...x, qty: x.qty - 1 } : x)
      );
    }
  };

  const ShowProducts = () => {
    return (
      <div>
        <div className="buttons d-flex justify-content-center mb-2">
          <button className="btn btn-outline-dark" onClick={() => ShowAll()}>
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
            onClick={() => filterByType("Bebidas")}
          >
            Bebidas
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => filterByType("Acompañamientos")}
          >
            Complementos
          </button>
        </div>
        {filter.map((x) => (
          <>
            <div key={x._id}>
              <div>{x.name}</div>
              <p>{x.price}</p>
              <button onClick={() => addProduct(x)}>Add</button>
            </div>
          </>
        ))}
      </div>
    );
  };

  return (
    <div>
      {loading ? <Loading /> : <ShowProducts />}
      <Cart cart={cart} addProduct={addProduct} deleteProduct={deleteProduct} />
    </div>
  );
};

export default Products;
