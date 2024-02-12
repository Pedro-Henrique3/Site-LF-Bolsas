import React from 'react';
import "./Footer.css";
import footer_logo from "../../assets/logo_big.png";
import { FiInstagram } from "react-icons/fi";
import { FaPinterest } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="Footer logo" />
            <p>LF Bolsas</p>
        </div>
        <ul className="footer-links">
            <li>Empresa</li>
            <li>Produtos</li>
            <li>Sobre</li>
            <li>Contato</li>
        </ul>
        <div className="footer-social-icons">
            <FiInstagram />
            <FaPinterest />
            <FaWhatsapp />
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright &copy; 2024 - Todos os direitos reservados.</p>
        </div>
    </div>
  )
}

export default Footer