import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";

import Login from "./components/Login.jsx";
import Profile from "./components/Profile.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Login />}></Route>
        {/* <Route path={"/profile"} element={<Profile />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
