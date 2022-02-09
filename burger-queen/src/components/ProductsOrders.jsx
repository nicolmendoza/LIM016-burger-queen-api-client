import axios from "axios";
import React, { useEffect, useState } from "react";
import Cart from "./Cart";

const Products = () => {
  const url = "https://bq-api-2022.herokuapp.com";
  const token = localStorage.getItem("token");
  const header = {
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
      .get(`https://bq-api-2022.herokuapp.com/products`, header)
      .then((response) => {
        console.log(response);

        setProducts(response.data);
        setFilter(response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const allProducts = () => {
    setFilter(products);
  };

  const filterProductsByType = (type) => {
    setFilter(products.filter((x) => x.type === type));
  };

  const Loading = () => {
    return <div>Loading ...</div>;
  };

  const [cart, setCart] = useState([]);

  const addProduct = (product) => {
    const exits = cart.find((x) => x._id === product._id);
    if (exits) {
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
      setCart(
        cart.map((x) =>
          x._id === product._id ? { ...product, qty: x.qty - 1 } : x
        )
      );
    }
  };

  const ShowProducts = () => {
    return (
      <div>
        <div width="200px">
          <div className="buttons d-flex justify-content-center mb-2">
            <button
              className="btn btn-outline-dark"
              onClick={() => allProducts()}
            >
              ALL
            </button>
            <button
              className="btn btn-outline-dark"
              onClick={() => filterProductsByType("Desayuno")}
            >
              Desayuno
            </button>
            <button
              className="btn btn-outline-dark"
              onClick={() => filterProductsByType("Acompañamientos")}
            >
              Complementos
            </button>
            <button
              className="btn btn-outline-dark"
              onClick={() => filterProductsByType("Bebidas")}
            >
              Bebidas
            </button>
          </div>
        </div>
        <div>
          {filter.map((x) => (
            <>
              <div>{x.name}</div>
              <p>{x.price}</p>
              <button onClick={() => addProduct(x)}>Add</button>
            </>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      {loading ? <Loading /> : <ShowProducts />}
      <Cart
        cart={cart}
        addProduct={addProduct}
        deleteProduct={deleteProduct}
        setCart={setCart}
      />
    </div>
  );
};

export default Products;
