import React from "react";
import empty from "../../assets/empty.avif";
import { NavLink } from "react-router-dom";
const Empty = () => {
  return (
    <div className="container empty">
      <img src={empty} alt="" />
      <button>
        <NavLink to={"/"}>BACK HOME</NavLink>
      </button>
    </div>
  );
};

export default Empty;
