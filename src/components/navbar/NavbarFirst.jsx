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
  const [toggle, setToggle] = useState(false);
  return (
    <div className="container">
      <div className=" first__navbar">
        <ul>
          <li>
            <NavLink>О компании</NavLink>
          </li>{" "}
          <li>
            <NavLink>Доставка и оплата</NavLink>
          </li>{" "}
          <li>
            <NavLink>Возврат</NavLink>
          </li>{" "}
          <li>
            <NavLink>Гарантии</NavLink>
          </li>{" "}
          <li>
            <NavLink>Контакты</NavLink>
          </li>{" "}
          <li>
            <NavLink>Блог</NavLink>
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
            <img src={miniLogo} alt="" />
          </div>
          <div className="menu2">
            <button>
              <IoIosHeartEmpty />
            </button>
            <button>
              <IoMdCart />
            </button>
            <button>
              <IoMdPerson />
            </button>
          </div>
        </div>
        <div className={`${toggle ? "mobile__content" : "mobile"}`}>
          <ul>
            <li>
              <NavLink>О компании</NavLink>
            </li>{" "}
            <li>
              <NavLink>Доставка и оплата</NavLink>
            </li>{" "}
            <li>
              <NavLink>Возврат</NavLink>
            </li>{" "}
            <li>
              <NavLink>Гарантии</NavLink>
            </li>{" "}
            <li>
              <NavLink>Контакты</NavLink>
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
