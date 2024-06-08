import React from "react";
import Map from "../map/Map";
const ContactContent = () => {
  return (
    <div className="container contact">
      <div className="contact__content">
        <h1>Контакты</h1>
        <div className="contact__right">
          <h3>8 (800) 890-46-56</h3>
          Пн-Пт: 10:00 до 19:00 СБ-вс: заказ через корзину Телефоны
          <p></p>
        </div>
      </div>
      <Map />
      <div className="address">
        <div className="card">
          <h3>Адрес магазина</h3>
          <p>г. Москва, Дмитровское шоссе д.100с2</p>
        </div>
        <div className="card">
          <h3>Почта</h3>
          <p>NORNLIGHT@mail.ru</p>
        </div>
        <div className="card">
          <h3>Телефон</h3>
          <p>8 (800) 890-46-56</p>
        </div>
        <button>Оставить заявку</button>
      </div>
    </div>
  );
};

export default ContactContent;
