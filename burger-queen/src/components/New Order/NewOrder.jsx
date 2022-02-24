import axios from "axios";
import React, { useEffect, useState } from "react";
import Cart from "./components/Cart";
import { Button, ContainerElements, DivElement, Container} from "../../style-components/components";
import DivData from '../../utils/Container-Data'
import Sidebar from "../Navegador"
import {getAllProducts} from '../../services/products'
import {ContainerMenu} from './components/style.js'
import "../../style-components/productsOrders.css";

const Products = () => {
  const url = "https://bq-api-2022.herokuapp.com/products";
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
  const [filter, setFilter] = useState(products);
  const [loading, setLoading] = useState(false);
  const [filter2, setFilter2] = useState(products);

  useEffect(() => {
    allProducts()
  }, []);

  const allProducts = async() => {
    const response = await getAllProducts(url, header, setLoading)
    console.log(response)
    setProducts(response.data)
    setFilter2(response.data)
  };

  const filterProductsByType = (type) => {
    setFilter(products.filter((x) => x.type === type));
    setFilter2(products.filter((x) => x.type === type));
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
          <Button onClick={() => setFilter2(products)}>ALL</Button>
          <Button onClick={() => filterProductsByType("Desayuno")}>
            Desayuno
          </Button>
          <Button onClick={() => filterProductsByType("Hamburguesas")}>
            Hamburguesas
          </Button>
          <Button onClick={() => filterProductsByType("Acompañamientos")}>
            Complementos
          </Button>
          <Button onClick={() => filterProductsByType("Bebidas")}>
            Bebidas
          </Button>
        </div>

        <ContainerElements height="6">
          {filter2.map((x) => (
              <DivData data={x}>
                <div>
                <p>{x.type}</p>
                <p>{x.name}</p>
                <p>Precio: S/{x.price}</p>
                </div>
                <Button color="black" onClick={() => addProduct(x)}>Add</Button>
              </DivData>
          ))}
        </ContainerElements>
      </div>
    );
  };

  return (
    <>
    <Sidebar value={`${roleUser}`}></Sidebar>
    {roleUser === 'cocinera'? "No tiene acceso para esta ruta" :
    <Container>  
      <div className="containerProductsOrders">
        <ContainerMenu>
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
          {loading ? "loading..." : <ShowProducts />}
        </ContainerMenu>
        <Cart
          cart={cart}
          addProduct={addProduct}
          deleteProduct={deleteProduct}
          setCart={setCart}
          totalFinal={totalFinal}
          setTotalFinal={setTotalFinal}
        />
        </div>
      </Container>}
    </>
  );
};

export default Products;