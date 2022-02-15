import React, { useEffect } from "react";
import "../style-components/sidebar.css";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import Settings from "./Settings";

const Sidebar = (role) => {
  const user = {
    newOrders: "/newOrder",
    orders: "/orders",
    products: "/products",
    users: "/admi",
    chef: "/getOrders",
    settings: "./settings",
    profile: "./profile",
  };
  console.log(role);

  const logOut = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div className="sidebar">
      <div className="logo-details">
        <FastfoodIcon className="icon" style={{ width: 30, height: 30 }}>
          {" "}
        </FastfoodIcon>
        <div className="logo_name">Burger Queen</div>
        <i className="bx bx-menu" id="btn"></i>
      </div>
      <ul className="nav-list">
        {role.value === "cocinera" ? (
          ""
        ) : (
          <li>
            <a href={user.newOrders}>
              <i className="bx bx-restaurant"></i>
              <span className="links_name">Nueva Orden</span>
            </a>
            <span className="tooltip">Nueva orden</span>
          </li>
        )}
        {role.value === "cocinera" ? (
          ""
        ) : (
          <li>
            <a href={user.orders}>
              <i className="bx bxs-dish"></i>
              <span className="links_name">Ordenes</span>
            </a>
            <span className="tooltip">Ordenes</span>
          </li>
        )}
        {role.value === "mesera" ? (
          ""
        ) : (
          <li>
            <a href={user.chef}>
              <i className="bx bxs-bell"></i>
              <span className="links_name">Ordenes Chef</span>
            </a>
            <span className="tooltip">Ordenes Chef</span>
          </li>
        )}
        {role.value !== "admin" ? (
          ""
        ) : (
          <li>
            <a href={user.settings}>
              <i className="bx bx-cog"></i>
              <span className="links_name">Setting</span>
            </a>
            <span className="tooltip">Setting</span>
          </li>
        )}

        <li>
          <a href={user.profile}>
            <i className="bx bx-cog"></i>
            <span className="links_name">Profile</span>
          </a>
          <span className="tooltip">Profile</span>
        </li>

        <li className="profile" onClick={logOut}>
          <i className="bx bx-log-out" id="log_out"></i>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
