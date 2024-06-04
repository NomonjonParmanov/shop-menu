import React from "react";
import logo from "../../assets/logo.png";
import {
  IoIosSearch,
  IoIosHeartEmpty,
  IoMdCart,
  IoMdPerson,
} from "react-icons/io";

const NavbarSecond = () => {
  return (
    <div className="container navbar__second">
      <div className="second__content">
        <img src={logo} alt="" />
        <button className="catalog">Каталог</button>
        <form action="">
          <input type="text" placeholder="Поиск по товарам" />
          <button>
            <IoIosSearch />
          </button>
        </form>
        <div className="icon">
          <button>
            <IoIosHeartEmpty />
          </button>
          <p>Избранное</p>
        </div>{" "}
        <div className="icon">
          <button>
            <IoMdCart />
          </button>
          <p>Корзина</p>
        </div>{" "}
        <div className="icon">
          <button>
            <IoMdPerson />
          </button>
          <p>регистрация</p>
        </div>
      </div>
    </div>
  );
};

export default NavbarSecond;
