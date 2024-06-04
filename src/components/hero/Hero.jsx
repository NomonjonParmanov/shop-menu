import React from "react";
import hero from "../../assets/hero.png";
const Hero = () => {
  return (
    <div className="container hero">
      <div className="hero__content">
        <div className="hero__title">
          <h1>Скидка 15% на все подвесные</h1>
          <div className="line"></div>
          <h1 className="h1">до 5 февраля</h1>
        </div>
        <div className="hero__img">
          <img src={hero} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
