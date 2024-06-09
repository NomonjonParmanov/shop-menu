import React from "react";
import not from "../../assets/404.png";
import { NavLink } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="container not">
      <img src={not} alt="" />
      <button>
        <NavLink to={"/"}>GO BACK</NavLink>
      </button>
    </div>
  );
};

export default NotFound;
