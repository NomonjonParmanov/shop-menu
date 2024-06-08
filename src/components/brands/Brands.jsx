import React from "react";
import { BREND } from "../../static";
const Brands = () => {
  let brand = BREND?.map((el) => (
    <div key={el.id} className="card">
      <img src={el.img} alt="" />
    </div>
  ));
  return (
    <div className="container brand">
      <h1>Только проверенные бренды</h1>
      <div className="cards">{brand}</div>
    </div>
  );
};

export default Brands;
