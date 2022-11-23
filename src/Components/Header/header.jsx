import React from "react";
import { Logo } from "../Logo/index";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import "./header.css";
import Search from "../../Assets/img/search.png"

export const Header = () => {

  const [token, setToken] = useState(null)

  useEffect(()=> {
    setToken(localStorage.getItem("token") || null)
  },[])
  return (
    <>
      <div className="container header">
        <Logo />
        <ul className="header-list d-flex align-item-center me-auto ms-auto">

          {
            token ?  
            <NavLink className="header-items" to="/">All</NavLink>
           :           
            <NavLink className="header-item" to="/login">Login</NavLink>
        
          }
          <li className="header-items">
            <NavLink className="header-item" to="/designtheory">Design Theory</NavLink>
          </li>
          <li className="header-items">
            <NavLink className="header-item" to="/ux">UX</NavLink>
          </li>
          <li className="header-items">
            <NavLink className="header-item" to="/ui">UI</NavLink>
          </li>
          <li className="header-items">
            <NavLink className="header-item" to="/typography">Typography</NavLink>
          </li>
        </ul>
        <form className="header-form">
          <input type="text" className="header-input" placeholder="Search"/>
          <button className="header-btn">
            <img src={Search} alt="search" className="header-img" />
          </button>
        </form>
      </div>
    </>
  );
};
