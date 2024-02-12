import React from 'react';
import "./Ofertas.css";
import exclusive_image from "../../assets/exclusive_image.png";

const Ofertas = () => {
  return (
    <div className='ofertas'>
        <div className="ofertas-left">
            <h1>Exclusivo</h1>
            <h1>Ofertas para você</h1>
            <p>MAIS VENDIDOS</p>
            <button>Conferir agora</button>
        </div>
        <div className="ofertas-right">
            <img src={exclusive_image} alt="Exclusive image" />
        </div>
    </div>
  )
}

export default Ofertas