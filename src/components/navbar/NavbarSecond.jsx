import React from "react";
import logo from "../../assets/logo.png";
import {
  IoIosSearch,
  IoIosHeartEmpty,
  IoMdCart,
  IoMdPerson,
} from "react-icons/io";
import { NavLink } from "react-router-dom";

const NavbarSecond = () => {
  return (
    <div className="container navbar__second">
      <div className="second__content">
        <NavLink to={"/"}>
          <img src={logo} alt="" />
        </NavLink>
        <button className="catalog">Каталог</button>
        <form action="">
          <input type="text" placeholder="Поиск по товарам" />
          <button>
            <IoIosSearch />
          </button>
        </form>
        <div className="icon">
          <button>
            <NavLink to={"/wishlist"}>
              <IoIosHeartEmpty />
            </NavLink>
          </button>
          <p>Избранное</p>
        </div>{" "}
        <div className="icon">
          <button>
            <NavLink to={"/cart"}>
              <IoMdCart />
            </NavLink>
          </button>
          <p>Корзина</p>
        </div>{" "}
        <div className="icon">
          <button>
            <NavLink to={"/register"}>
              <IoMdPerson />
            </NavLink>
          </button>
          <p>регистрация</p>
        </div>
      </div>
    </div>
  );
};

export default NavbarSecond;
