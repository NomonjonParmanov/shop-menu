import React from "react";
import { BLOG } from "../../static";
import { NavLink } from "react-router-dom";
const Blog = () => {
  let blog = BLOG?.map((el) => (
    <div key={el.id} className="card">
      <img src={el.img} alt={el.title} />
      <h3>{el.title}</h3>
      <p>{el.data}</p>
    </div>
  ));
  return (
    <div className="container blog">
      <div className="blog__title">
        <h1>Блог</h1>
        <button>
          <NavLink to={"/blog"}>Перейти в блог</NavLink>
        </button>
      </div>
      <div className="cards">{blog}</div>
      <button className="media__btn">
        <NavLink to={"/blog"}>Перейти в блог</NavLink>
      </button>

      <div className="blog__title2">
        <h1>Производство светильников</h1>
        <p>
          Интернет-магазин NORNLIGHT предлагает широкий ассортимент светильников
          для освещения вашего дома или офиса. У нас вы найдете разнообразные
          модели светильников, от современных и стильных до классических и
          элегантных. Мы предлагаем качественные и надежные светильники от
          лучших производителей, которые подарят вам комфорт и уют
          <br /> <br /> Покупая светильники в нашем интернет-магазине, вы
          получаете отличное соотношение цены и качества. Мы осуществляем
          доставку по всей России, чтобы каждый клиент мог насладиться
          прекрасным светом и удобством покупки онлайн. Обратитесь к нам сегодня
          и превратите ваш дом в оазис тепла и света с NORNLIGHT!
        </p>
      </div>
    </div>
  );
};

export default Blog;
