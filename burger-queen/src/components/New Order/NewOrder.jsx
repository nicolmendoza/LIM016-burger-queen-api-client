import React, { useEffect, useState } from "react";
import Cart from "./components/Cart";
import { Button, ContainerElements, Container, GroupTab, Tab, ButtonOrder} from "../../style-components/components";
import DivData from '../../utils/Container-Data'
import Sidebar from "../Navegador"
import UserInfo from './components/User'
import {getAllProducts} from '../../services/products'
import {ContainerMenu, Icon, ButtonMenu} from './components/style.js'
import Input from './components/input.jsx'
import "../../style-components/productsOrders.css";
import Loader from "../../utils/Loader";
import back from "../../img/back.webp"

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

  const types = ['Todas', 'Desayuno', 'Hamburguesas', 'Complementos', 'Bebidas' ]
  const [totalFinal, setTotalFinal] = useState([]);
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState(products);
  const [loading, setLoading] = useState(true);
  const [filter2, setFilter2] = useState(products);
  const [active, setActive] = useState(types[0])

  useEffect(() => {
    allProducts()
  }, []);

  const allProducts = async() => {
    try {
      const response = await getAllProducts(url, header)
          setProducts(response.data)
          setFilter2(response.data)
          setFilter(response.data)
          setLoading(false)
    } catch (e) {
      console.error(e.response.data)
    }
    
  };

  const filterProductsByType = (type) => {
    setFilter(products.filter((x) => x.type === type));
    setFilter2(products.filter((x) => x.type === type));
    setActive(type)
  };

  const [cart, setCart] = useState([]);

  const addProduct = (product) => {

    const exits = cart.find((x) => x._id === product._id);
    if (exits) {
      return setCart(
        cart.map((x) => (x._id === product._id ? { ...x, qty: x.qty + 1 } : x))
      );
    } 
      return setCart([...cart, { ...product, qty: 1 }]);
  };

  const deleteProduct = (product) => {
    console.log('eliminado')
    return setCart(cart.filter((x) => x._id !== product._id));

  };

  const changeQty = (product, e) => {
    const exits = cart.find((x) => x._id === product._id);
    if (exits) {
      return setCart(
        cart.map((x) => (x._id === product._id ? { ...x, qty: parseInt(e.target.value<0?1:e.target.value) } : x))
      );
    } 
      // return setCart([...cart, { ...product, qty: 1 }]);
  };

  const ShowProducts = () => {
    return (
      <>
      <GroupTab>
          {
            types.map(type => (
              <Tab
              key={type}
              active={active === type}
              responsive='true'
              onClick={type==='Todas'? () => {setFilter2(products); setFilter(products); setActive(type)}  : () => filterProductsByType(type)}>{type}</Tab>
            ))
          }</GroupTab>
      <div className="btnProductsDiv">
        {/* <div className="container-btnMenu">
          <ButtonMenu onClick={() =>{setFilter2(products); setFilter(products)} }>ALL</ButtonMenu>
          <ButtonMenu onClick={() => filterProductsByType("Desayuno")}>
            Desayuno
          </ButtonMenu>
          <ButtonMenu onClick={() => filterProductsByType("Hamburguesas")}>
            Hamburguesas
          </ButtonMenu>
          <ButtonMenu onClick={() => filterProductsByType("Acompañamientos")}>
            Complementos
          </ButtonMenu>
          <ButtonMenu onClick={() => filterProductsByType("Bebidas")}>
            Bebidas
          </ButtonMenu>
        </div> */}
        
        <ContainerElements height="9" data-testid="listOrders">
          {filter2.map((x) => (
              <DivData data={x} id={x._id}>
                <div>
                <p>{x.name}</p>
                <p>Precio: S/{x.price}</p>
                </div>
                <ButtonOrder  width="50%" color="black" onClick={() => addProduct(x)}  data-testid={x.name}>Add</ButtonOrder>
              </DivData>
          ))}
        </ContainerElements>
      </div>
      </>
    );
  };

  return (
    <>
    <Sidebar value={`${roleUser}`}></Sidebar>
    {roleUser === 'cocinera'? "No tiene acceso para esta ruta" :
    <Container background={back} valid='true' >  
       <div className="containerProductsOrders">
       {loading ? <Loader/> : <>
        <ContainerMenu>
          <div className="header-newOrder">
            <UserInfo/>
              <Input
                icon = {<Icon/>}
                label="none"
                type="text"
                className="inputSearch"
                name="texto"
                placeholder="Buscar hamburguesas, bebidas, ..."
                estado={filter}
                changeState={setFilter2}
                color="#ffffff61"
              ></Input>
          </div>
          <ShowProducts/>
        </ContainerMenu>
        <Cart
          cart={cart}
          addProduct={addProduct}
          deleteProduct={deleteProduct}
          setCart={setCart}
          totalFinal={totalFinal}
          setTotalFinal={setTotalFinal}
          changeQty={changeQty}
        />
        </>}
        </div>
      </Container>}
    </>
  );
};

export default Products;