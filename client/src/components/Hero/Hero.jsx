import React from "react";
import "./Hero.css";
import hand_icon from "../../assets/hand_icon.png";
import arrow_icon from "../../assets/arrow.png";
import hero_image from "../../assets/hero_image.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>Novidades</h2>
        <div>
          <div className="hero-hand-icon">
            <p>novas</p>
            <img src={hand_icon} alt="Hand icon" />
          </div>
          <p>coleções</p>
          <p>para todos</p>
        </div>
        <div className="hero-latest-btn">
            <div>Última coleção</div>
            <img src={arrow_icon} alt="Arrow icon" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="Hero image" />
      </div>
    </div>
  );
};

export default Hero;
