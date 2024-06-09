import React from "react";
import { NORNLIGHT } from "../../static";
import { NavLink } from "react-router-dom";
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
        <button>
          <NavLink to={"/about"}>О компании</NavLink>
        </button>
      </div>
      <div className="cards">{norn}</div>
      <button className="media__btn">
        {" "}
        <NavLink to={"/about"}>О компании</NavLink>
      </button>
    </div>
  );
};

export default NornLight;
