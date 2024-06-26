import React from "react";
import miniImg from "../../assets/miniLogo.png";
import pay from "../../assets/pay.png";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__cards">
          <div className="footer__card">
            <img src={miniImg} alt="" />
            <p className="tell">8 (800) 890-46-56</p>
            <img src={pay} alt="" />
            <p>Политика конфидециальности</p>
            <p>Пользовательское соглашение</p>
          </div>
          <div className="footer__card">
            <h3>Покупателям</h3>
            <ul>
              {" "}
              <li>
                <NavLink to={"/shipping"}>Доставка и оплата</NavLink>
              </li>
              <li>
                <NavLink to={"/return"}>Возврат</NavLink>
              </li>
              <li>
                <NavLink to={"/about"}>О компании</NavLink>
              </li>
              <li>
                <NavLink to={"/garant"}>Гарантии</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>Контакты</NavLink>
              </li>
              <li>
                <NavLink to={"/blog"}>Блог</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer__card">
            <h3>Товары</h3>
            <ul>
              <li>Люстры</li>
              <li>Светильники</li>
              <li>Возврат</li>
              <li>Бра</li>
              <li>Торшеры</li>
              <li>Комплектуюшие</li>
              <li>Настольные лампы</li>
            </ul>
          </div>{" "}
          <div className="footer__card">
            <ul>
              <li>Споты</li>
              <li>Трековые светильники</li>
              <li>Уличные светильники</li>
              <li>Технические светильники</li>
              <li>Светодиодные ленты</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
