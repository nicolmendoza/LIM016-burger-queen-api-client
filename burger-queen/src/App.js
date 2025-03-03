import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { useEffect } from "react";
import Login from "./components/Login.jsx";
import Admi from "./components/Admi";
import EditUser from "./components/EditUser.jsx";
import ProductsOrders from "./components/New Order/NewOrder.jsx";
import EditProduct from "./components/EditProduct.jsx";
import Inicio from "./components/Inicio/Inicio.jsx";
import Orders from "./components/Orders.jsx";
import Products from "./components/Products.jsx";
import GetOrders from "./components/GetOrders.jsx";
import Settings from "./components/Settings.jsx";
import Error404 from "./components/Error404.jsx";
import Profile from "./components/Profile.jsx";
import DashBoard from "./components/Dashboard/Dash.jsx";
function App() {


      const token = localStorage.getItem("token")

  
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={"/"} element={<Inicio />}></Route>
        <Route exact path={"/login"} element={<Login />}></Route>
        <Route
          exact
          path={"/getOrders"}
          element={!token ? <Navigate to="/login" /> : <GetOrders />}
        />
        {/* <Route path={"/admi"} element={<Admi />}></Route> */}

        <Route
          exact
          path={"/newOrder"}
          element={!token ? <Navigate to="/login" /> : <ProductsOrders />}
        />

        <Route
          exact
          path={"/orders"}
          element={!token ? <Navigate to="/login" /> : <Orders />}
        />
        {/* <Route path={"/products"} element={<Products />}></Route> */}
        <Route
          exact
          path={"/settings"}
          element={!token ? <Navigate to="/login" /> : <Settings />}
        />
        <Route
          exact
          path={"/profile"}
          element={!token ? <Navigate to="/login" /> : <Profile />}
        />
        <Route
          exact
          path={"/edit/:id"}
          element={!token ? <Navigate to="/login" /> : <EditUser />}
        />
        <Route
          exact
          path={"/editProduct/:id"}
          element={!token ? <Navigate to="/login" /> : <EditProduct />}
        />
        <Route
          exact
          path={"/dashboard"}
          element={!token ? <Navigate to="/login" /> : <DashBoard />}
        />
        <Route path="*" element={<Error404 />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
