import React, { useEffect, useState} from "react";
import "../style-components/sidebar.css";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import {Icon} from '../style-components/components'

const Sidebar = (role) => {
  const user = {
    dashboard :"/dashboard",
    newOrders: "/newOrder",
    orders: "/orders",
    products: "/products",
    users: "/admi",
    chef: "/getOrders",
    settings: "/settings",
    profile: "/profile",
    
  };
  // console.log(role);
  const [active, setActive] = useState('')

  const logOut = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  useEffect(() => {
      if(window.location.pathname === '/orders') return setActive('Ordenes')
      if(window.location.pathname === '/getOrders') return setActive('Ordenes Chef')
      if(window.location.pathname === '/newOrder') return setActive('Nueva Orden')
      if(window.location.pathname === '/settings') return setActive('Setting')
      if(window.location.pathname === '/profile') return setActive('Perfil')
      if(window.location.pathname === '/dashboard') return setActive('Dashboard')

  }, []);

  return (
    <div className="sidebar">
      <div className="logo-details">
        <FastfoodIcon className="icon" style={{ width: 30, height: 30 }}>
          {" "}
        </FastfoodIcon>
        <div className="logo_name">Burger Queen</div>
        {/* <a href="#home" className="logo"><img src={logo} alt=""/></a> */}
        <Icon className="bx bx-menu" id="btn"></Icon>
      </div>
      <ul className="nav-list">
        {role.value === "cocinera" ? (
          ""
        ) : (
          <li id='newOrden'>
            <a href={user.newOrders}>
              <Icon className="bx bx-restaurant"
              key='Nueva Orden'
              active={active === 'Nueva Orden'}></Icon>
              <span className="links_name">Nueva Orden</span>
            </a>
            <span className="tooltip">Nueva orden</span>
          </li>
        )}
        {role.value === "cocinera" ? (
          ""
        ) : (
          <li id='orders'>
            <a href={user.orders}>
              <Icon className="bx bxs-dish"
                key='Ordenes'
                active={active === 'Ordenes'}
              ></Icon>
              <span className="links_name">Ordenes</span>
            </a>
            <span className="tooltip">Ordenes</span>
          </li>
        )}
        {role.value === "mesera" ? (
          ""
        ) : (
          <li id='chef'>
            <a href={user.chef}>
              <Icon className="bx bxs-bell"
              key='Ordenes Chef'
              active={active === 'Ordenes Chef'}></Icon>
              <span className="links_name">Ordenes Chef</span>
            </a>
            <span className="tooltip">Ordenes Chef</span>
          </li>
        )}
        {role.value !== "admin" ? (
          ""
        ) : (
          <li id='setting'>
            <a href={user.settings}>
              <Icon className="bx bxs-cog"
              key='Setting'
              active={active === 'Setting'}></Icon>
              <span className="links_name">Setting</span>
            </a>
            <span className="tooltip">Setting</span>
          </li>
        )}
        {role.value !== "admin" ? (
          ""
        ) : (
          <li>
            <a href={user.dashboard}>
              <Icon className="bx bxs-pie-chart-alt-2"
              key='Dashboard'
              active={active === 'Dashboard'}></Icon>
              <span className="links_name">Dahboard</span>
            </a>
            <span className="tooltip">Dashboard</span>
          </li>
        )}
        <li id='profile'>
          <a href={user.profile}>
            <Icon className='bx bxs-user'
            key='Perfil'
            active={active === 'Perfil'}></Icon>
            <span className="links_name">Perfil</span>
          </a>
          <span className="tooltip">Perfil</span>
        </li>

        <li className="profile" onClick={logOut}>
          <i className="bx bx-log-out" id="log_out"></i>
          <span className="tooltip">Log Out</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
