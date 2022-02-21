import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

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
import Profile from "./components/Profile.jsx"
function App() {
  const token = localStorage.getItem("token");
  console.log(!token);
  return (
    <BrowserRouter>
      <Routes>
        {!token ? (
          <>
          <Route exact path={"/"} element={<Inicio />}></Route>
          <Route exact path={"/login"} element={<Login />}></Route>
          </>
        ) : (
          <>
            <Route exact path={"/"} element={<Inicio />}></Route>
            <Route exact path={"/login"} element={<Settings />}></Route>
            <Route
              exact
              path={"/getOrders"}
              element={<GetOrders />}
            />
            <Route
              exact
              path={"/edit/:id"}
              element={<EditUser />}
            />
            <Route
              exact
              path={"/newOrder"}
              element={<ProductsOrders /> }
            />
            <Route
              exact
              path={"/editProduct/:id"}
              element={<EditProduct /> }
            />
            <Route exact path={"/orders"} element={<Orders />} />

            <Route
              exact
              path={"/settings"}
              element={<Settings />}
            />
            <Route
              exact
              path={"/profile"}
              element={<Profile />}
            />

          </>
        )}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
