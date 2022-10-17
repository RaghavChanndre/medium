import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import Logo from "../Image/Logo.svg";

const Navbar =() => {
  return (
    <>
    <div className="container-fluid nav_bg">
        <div className="row">
    <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="#"><img src={Logo} alt="logo.img" /></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  ">
        
        <li className="nav-item">
          <NavLink className="nav-link" to="#">Our story</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="#">Membership</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="#">Write</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="#">SignIn</NavLink>
        </li>
        
      </ul>
      
        <button className="btn " type="submit">Get Started</button>
      
    </div>
  </div>
</nav>
</div>
  </div>
     </>
    );
}

export default Navbar;
