import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  IoIosMenu,
  IoMdClose,
  IoIosHeartEmpty,
  IoMdCart,
  IoMdPerson,
} from "react-icons/io";
import miniLogo from "../../assets/miniLogo.png";
const NavbarFirst = () => {
  let tokens = localStorage.getItem("token");
  const [toggle, setToggle] = useState(false);
  return (
    <div className="container">
      <div className=" first__navbar">
        <ul>
          <li>
            <NavLink to={"/about"}>О компании</NavLink>
          </li>{" "}
          <li>
            <NavLink to={"/shipping"}>Доставка и оплата</NavLink>
          </li>{" "}
          <li>
            <NavLink to={"/return"}>Возврат</NavLink>
          </li>{" "}
          <li>
            <NavLink to={"/garant"}>Гарантии</NavLink>
          </li>{" "}
          <li>
            <NavLink to={"/contact"}>Контакты</NavLink>
          </li>{" "}
          <li>
            <NavLink to={"/blog"}>Блог</NavLink>
          </li>
        </ul>
        <ul>
          <li className="tell">8 (800) 890-46-56</li>
          <li>
            <NavLink>Заказать звонок</NavLink>
          </li>
        </ul>
      </div>
      <div className="first__navbar__mobile">
        <div className="mobile__btns">
          <div className="menu">
            <button onClick={() => setToggle(!toggle)}>
              {toggle ? <IoMdClose /> : <IoIosMenu />}
            </button>
            <NavLink to={"/"}>
              <img src={miniLogo} alt="" />
            </NavLink>
          </div>
          <div className="menu2">
            <button>
              <NavLink to={"/wishlist"}>
                <IoIosHeartEmpty />
              </NavLink>
            </button>
            <button>
              <NavLink to={"/cart"}>
                <IoMdCart />
              </NavLink>
            </button>
            <button>
              {tokens ? (
                <NavLink to={"/admin"}>
                  <IoMdPerson />
                </NavLink>
              ) : (
                <NavLink to={"/register"}>
                  <IoMdPerson />
                </NavLink>
              )}
            </button>
          </div>
        </div>
        <div className={`${toggle ? "mobile__content" : "mobile"}`}>
          <ul>
            <li>
              <NavLink to={"/about"}>О компании</NavLink>
            </li>{" "}
            <li>
              <NavLink to={"/shipping"}>Доставка и оплата</NavLink>
            </li>{" "}
            <li>
              <NavLink to={"/return"}>Возврат</NavLink>
            </li>{" "}
            <li>
              <NavLink to={"/garant"}>Гарантии</NavLink>
            </li>{" "}
            <li>
              <NavLink to={"/blog"}>Контакты</NavLink>
            </li>{" "}
            <li>
              <NavLink>Блог</NavLink>
            </li>
          </ul>
          <button>Katalog</button>
          <ul>
            <li className="tell">8 (800) 890-46-56</li>
            <li>
              <NavLink>Заказать звонок</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarFirst;
