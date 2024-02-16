import React, { useContext, useState } from "react";
// import { FiMenu } from "react-icons/fi";
// import { IoCloseOutline } from "react-icons/io5";
import cart_icon from "../../assets/cart_icon.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { HomeContext } from "../../context/HomeContext";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [menu, setMenu] = useState("shop");

  const { getTotalCartItems } = useContext(HomeContext);

  const navHandler = () => {
    setNav(!nav);
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <h1>LF Bolsas</h1>
      </div>
      <ul className="nav-menu">
        <li onClick={() => {setMenu("shop")}}><Link to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={() => {setMenu("casuais")}}><Link to='/casuais'>Casuais</Link>{menu==="casuais"?<hr/>:<></>}</li>
        <li onClick={() => {setMenu("termicas")}}><Link to='/termicas'>Térmicas</Link>{menu==="termicas"?<hr/>:<></>}</li>
        <li onClick={() => {setMenu("kids")}}><Link to='kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/carrinho'><img src={cart_icon} alt="Cart icon" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
    // <div className="w-full h-25 bg-[#00af9a] flex justify-between items-center">
    //   <h1 className="text-white font-bold p-3">LF Bolsas Deluxe</h1>
    //   <ul className="flex p-3">
    //     <li className="text-white font-bold p-2 cursor-pointer">Cart</li>
    //     <li className="text-white font-bold p-2 cursor-pointer">Entrar</li>
    //   </ul>

    //   <div className="md:hidden">
    //     {nav ? (
    //       <IoCloseOutline
    //         onClick={navHandler}
    //         className="text-[#000300] text-4x1 px-2"
    //       />
    //     ) : (
    //       <FiMenu
    //         onClick={navHandler}
    //         className="text-[#000300] text-4x1 px-2"
    //       />
    //     )}
    //   </div>

    //   <div
    //     className={
    //       nav
    //         ? "md:hidden fixed top-0 left-0  h-[100%] w-60 bg-[#00af9a]"
    //         : "hidden"
    //     }
    //   >
    //     <h1 className="text-white text-left font-bold p-3">LF Bolsas Deluxe</h1>
    //     <ul className="flex flex-column text-left p-3">
    //       <li className="text-white font-bold p-2 hover:bg-[#2C2A2A] cursor-pointer">
    //         Cart
    //       </li>
    //       <li className="text-white font-bold p-2 hover:bg-[#2C2A2A] cursor-pointer">
    //         Entrar
    //       </li>
    //     </ul>
    //   </div>
    // </div>
  );
};

export default Navbar;
