import React, { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { decCart, incCart, removeFromCart } from "../../context/cartSlice";
import { MdDeleteForever } from "react-icons/md";
import { PatternFormat } from "react-number-format";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Empty from "../empty/Empty";

const CartContent = () => {
  const [name, setName] = useState("");
  const [adress, setAdrees] = useState("");
  const [email, setEmail] = useState("");
  const [pay, setPay] = useState("");
  const [num, setNum] = useState("");
  const user = useSelector((state) => state.cart.value);
  console.log(user);
  const BOT_TOKEN = "6765319054:AAGM7Q5sdKWUSY2ShxsGEu__RjKjaVuAyTA";
  const CHAT_ID = "-1002101256953";
  const handleOrder = (e) => {
    e.preventDefault();
    let text = "Xaridor  %0A%0A";
    text += `Name: ${name} %0A`;
    text += `address: ${adress} %0A`;
    text += `email: ${email} %0A`;
    text += `koment: ${pay} %0A`;
    text += `number: ${num} %0A%0A`;
    text += `Buyurtma %0A%0A`;
    user.map((el) => {
      text += `Price: $${el.price} %0A`;
      text += `Title: ${el.title} %0A`;
      text += `Category: ${el.category} %0A%0A`;
      localStorage.removeItem("carts");
    });
    let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    toast.success("buyurtma qabul qilingdi");
  };
  const carts = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  let sum = carts.reduce((acc, el) => {
    return acc + el.quantity * el.price;
  }, 0);

  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  let items = carts?.map((el) => (
    <div className="product" key={el.id}>
      <div className="cart2">
        <img src={el.image} alt={el.title} />
        <p>{el.title.substring(0, 15)}...</p>
      </div>
      <p className="price">$ {el.price} </p>
      <div className="btns">
        <button onClick={() => dispatch(incCart(el))} className="btn1">
          <FaChevronUp className="icon" />
        </button>
        <button className="btn2">{el.quantity}</button>
        <button
          className="btn3"
          disabled={el.quantity <= 1}
          onClick={() => dispatch(decCart(el))}
        >
          <FaChevronDown className="icon" />
        </button>
      </div>
      <p className="end">$ {el.price * el.quantity} </p>
      <button className="delete">
        <MdDeleteForever onClick={() => dispatch(removeFromCart(el))} />
      </button>
    </div>
  ));
  return carts.length > 0 ? (
    <div className="container cart">
      <h1>Корзина</h1>
      <div className="cards">
        <div className="card1">
          <h2>Товары</h2>
          <h2>цена</h2>
          <h2>Количество</h2>
          <h2>общая цена</h2>
          <h2>отменить</h2>
        </div>
        <div className="card2">{items}</div>
      </div>
      <div className="zakaz">
        <h2>Оформление</h2>
        <form action="">
          <div className="first">
            <input
              type="text"
              placeholder="ФИО"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <PatternFormat
              format="+998 (##) ### ## ##"
              allowEmptyFormatting
              mask="_"
              value={num}
              required
              onChange={(e) => setNum(e.target.value)}
            />
            <input
              type="gmail"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Электронная почта"
            />
          </div>
          <div className="second">
            <h2>Доставка</h2>
            <input
              type="text"
              placeholder="Адрес доставки"
              value={adress}
              required
              onChange={(e) => setAdrees(e.target.value)}
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Комментарий"
              required
              value={pay}
              onChange={(e) => setPay(e.target.value)}
            ></textarea>
          </div>
        </form>
      </div>
      <div className="oplata">
        <h2>Оплата</h2>
        <div className="first">
          <p>Товары ${sum}</p>
          <p>Доставка ${10}</p>
        </div>
        <h2>${sum}</h2>
        <div className="second">
          <button onClick={handleOrder}>Купить</button>
          <p>Я согласен наобработку моих персональных данных</p>
        </div>
      </div>
      <ToastContainer
        autoClose={400}
        style={{ left: 0, bottom: 10, width: 250 }}
      />
    </div>
  ) : (
    <Empty />
  );
};

export default CartContent;
