import React, { useContext, useRef, useState } from "react";
import { FiMenu } from "react-icons/fi";
// import { IoCloseOutline } from "react-icons/io5";
import cart_icon from "../../assets/cart_icon.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { HomeContext } from "../../context/HomeContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(HomeContext);

  const menuRef = useRef();

  const menuToggle = () => {
    menuRef.current.classList.toggle("nav-menu-visible");
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <h1>LF Bolsas</h1>
      </div>
      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/">Shop</Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("casuais");
          }}
        >
          <Link to="/casuais">Casuais</Link>
          {menu === "casuais" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("termicas");
          }}
        >
          <Link to="/termicas">Térmicas</Link>
          {menu === "termicas" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to="kids">Kids</Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-right">
        <div className="nav-login-cart">
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/carrinho">
            <img src={cart_icon} alt="Cart icon" />
          </Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
        <FiMenu className="nav-menu-icon" onClick={menuToggle} />
      </div>
    </div>
  );
};

export default Navbar;
