import React from "react";
import { NORNLIGHT } from "../../static";
const NornLight = () => {
  let norn = NORNLIGHT?.map((el) => (
    <div key={el.id} className="card">
      <img src={el.img} alt={el.title} />
      <h3>{el.title}</h3>
      <p>{el.paragh}</p>
    </div>
  ));
  return (
    <div className="container light">
      <div className="ligth__title">
        <h1>Почему NORNLIGHT?</h1>
        <button>О компании</button>
      </div>
      <div className="cards">{norn}</div>
      <button className="media__btn">О компании</button>
    </div>
  );
};

export default NornLight;
