import React from 'react';
import arrow_icon from "../../assets/breadcrum_arrow.png";
import "./Breadcrum.css";

const Breadcrum = (props) => {
    const {product} = props;

  return (
    <div className='breadcrum'>
        HOME <img src={arrow_icon} alt="Arrow icon" /> SHOP <img src={arrow_icon} alt="Arrow icon" /> {product.category} <img src={arrow_icon} alt="Arrow icon" /> {product.name}
    </div>
  )
}

export default Breadcrum