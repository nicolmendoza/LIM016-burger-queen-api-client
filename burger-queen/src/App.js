import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom";

import React from "react";

import Login from "./components/Login.jsx";
import Admi from "./components/Admi.jsx";
import EditUser from "./components/EditUser.jsx";
import ProductsOrders from "./components/ProductsOrders.jsx";
import EditProduct from "./components/EditProduct.jsx";
import Inicio from "./components/Bienvenida.jsx";
import Orders from "./components/Orders.jsx";
import Products from "./components/Products.jsx";
import GetOrders from "./components/GetOrders.jsx";
import Settings from "./components/Settings.jsx";
import Error404 from "./components/Error404.jsx";

function App() {
  const token = localStorage.getItem('token')
  console.log(!token)
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={"/"} element={<Inicio />}></Route>
        <Route exact path={"/login"} element={<Login />}></Route>
        <Route exact path={"/getOrders"} element = { !token ?  <Navigate to="/login" /> : <GetOrders /> } />
        {/* <Route path={"/admi"} element={<Admi />}></Route> */}
        <Route exact path={"/edit/:id"} element= { !token ?  <Navigate to="/login" /> : <EditUser /> } />
        <Route exact path={"/newOrder"} element= { !token ?  <Navigate to="/login" /> : <ProductsOrders /> } />
        <Route exact path={"/editProduct/:id"} element= { !token ?  <Navigate to="/login" /> : <EditProduct /> } />
        <Route exact path={"/orders"}  element= { !token ?  <Navigate to="/login" /> : <Orders /> } />
        {/* <Route path={"/products"} element={<Products />}></Route> */}
        <Route exact path={"/settings"} element= { !token ?  <Navigate to="/login" /> : <Settings /> } />
        <Route path="*" element = {<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
