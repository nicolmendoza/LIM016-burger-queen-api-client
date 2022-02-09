import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";

import Login from "./components/Login.jsx";
import Admi from "./components/Admi.jsx";
import EditUser from "./components/EditUser.jsx";
import Products from "./components/Products.jsx";
import EditProduct from "./components/EditProduct.jsx";
import Inicio from "./components/Bienvenida.jsx"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Inicio />}></Route>
        <Route path={"/login"} element={<Login />}></Route>
        <Route path={"/admi"} element={<Admi />}></Route>
        <Route path={"/edit/:id"} element={<EditUser />}></Route>
        <Route path={"/products"} element={<Products />}></Route>
        <Route path={"/editProduct/:id"} element={<EditProduct />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
