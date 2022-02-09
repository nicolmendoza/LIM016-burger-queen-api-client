import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";

import Login from "./components/Login.jsx";
import Admi from "./components/Admi.jsx";
import EditUser from "./components/EditUser.jsx";
import Products from "./components/Products.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Login />}></Route>
        <Route path={"/admi"} element={<Admi />}></Route>
        <Route path={"/edit/:id"} element={<EditUser />}></Route>
        <Route path={"/products"} element={<Products />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
