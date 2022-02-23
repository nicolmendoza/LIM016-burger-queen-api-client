import axios from "axios";
import React, { useEffect, useState } from "react";
import Cart from "./Cart";
import {Container, Button} from '../style-components/components.js'
import Sidebar from "./Navegador"
import "../style-components/productsOrders.css";

const Products = () => {
  const url = "https://bq-api-2022.herokuapp.com";
  const roleUser = localStorage.getItem("role");
  const token = localStorage.getItem("token");
  const header = {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
  };
  const [totalFinal, setTotalFinal] = useState([]);
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter2, setFilter2] = useState([]);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://bq-api-2022.herokuapp.com/products`, header)
      .then((response) => {
        console.log(response);

        setProducts(response.data);
        setFilter(response.data);
        setFilter2(response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const allProducts = () => {
    setFilter(products);
    setFilter2(products);
  };

  const filterProductsByType = (type) => {
    setFilter(products.filter((x) => x.type === type));
    setFilter2(products.filter((x) => x.type === type));
  };

  const Loading = () => {
    return <div className="btnProductsDiv">Loading ...</div>;
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

  const buscador = (e) => {
    const arrayInicial = filter;
    const array = arrayInicial.filter((x) =>
      x.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilter2(array);
  };

  const ShowProducts = () => {
    return (
      <div className="btnProductsDiv">
        <div className="btnDiv">
          <Button onClick={() => allProducts()}>ALL</Button>
          <Button onClick={() => filterProductsByType("Desayuno")}>
            Desayuno
          </Button>
          <Button onClick={() => filterProductsByType("Acompañamientos")}>
            Complementos
          </Button>
          <Button onClick={() => filterProductsByType("Bebidas")}>
            Bebidas
          </Button>
        </div>

        <div className="containerProdutsDiv">
          {filter2.map((x) => (
              <div className="containerProduts"  key={x._id}>
                <h5>{x.name}</h5>
                <p>Precio: ${x.price}</p>
                <div className="imgDiv">
                  <img style={{ width: 100, height: 100 }} src={x.image}></img>
                </div>
                <Button onClick={() => addProduct(x)}>Add</Button>
              </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
    <Sidebar value={`${roleUser}`}></Sidebar>
    <Container>
    {roleUser === 'cocinera'? "No tiene acceso para esta ruta" :
      <div className="containerProductsOrders">
        <div>
          <div className="inputDiv">
            <h3>Busca un producto :   </h3>
            <input
              type="text"
              onChange={buscador}
              className="inputSearch"
              name="texto"
              placeholder="Search.."
            ></input>
          </div>
          {loading ? <Loading /> : <ShowProducts />}
        </div>
        <Cart
          cart={cart}
          addProduct={addProduct}
          deleteProduct={deleteProduct}
          setCart={setCart}
          totalFinal={totalFinal}
          setTotalFinal={setTotalFinal}
        />
        </div>}
      </Container>
    </>
  );
};

export default Products;