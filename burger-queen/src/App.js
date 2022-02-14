import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";

import Login from "./components/Login.jsx";
import Admi from "./components/Admi.jsx";
import EditUser from "./components/EditUser.jsx";
import ProductsOrders from "./components/ProductsOrders.jsx";
import EditProduct from "./components/EditProduct.jsx";
import Inicio from "./components/Bienvenida.jsx";
import Orders from "./components/Orders.jsx";
import Products from "./components/Products.jsx";
// import ProductsPrueba from "./components/ProductsOrders/ProductsPrueba.jsx"
import GetOrders from "./components/GetOrders.jsx";
import Sidebar from "./components/Navegador.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Inicio />}></Route>
        {/* <Route exact path={"/prueba"} element={<ProductsPrueba />}></Route> */}
        {/* <Route path={"/"} element={<Sidebar />}></Route> */}
        <Route path={"/login"} element={<Login />}></Route>
        <Route path={"/getOrders"} element={<GetOrders />}></Route>
        <Route path={"/admi"} element={<Admi />}></Route>
        <Route path={"/edit/:id"} element={<EditUser />}></Route>
        <Route path={"/products/orders"} element={<ProductsOrders />}></Route>
        <Route path={"/editProduct/:id"} element={<EditProduct />}></Route>
        <Route path={"/orders"} element={<Orders />}></Route>
        <Route path={"/products"} element={<Products />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
