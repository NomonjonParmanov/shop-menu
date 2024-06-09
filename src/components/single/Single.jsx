import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "../../context/productApi";
import { toggleToWishes } from "../../context/wishlistSlice";
import { ToastContainer, toast } from "react-toastify";
import { MdDeleteForever } from "react-icons/md";

import {
  addToCart,
  decCart,
  incCart,
  removeFromCart,
} from "../../context/cartSlice";
import { FaRegHeart, FaHeart, FaChevronUp } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { FaChevronDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
const Single = () => {
  let { data } = useGetProductsQuery();
  let wishes = useSelector((state) => state.wishlist.value);
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  let { id } = useParams();
  let product = data?.filter((el) => el.id === id);
  console.log(product);
  let card = product?.map((el) => (
    <div className="single2" key={el.id}>
      <div className="single__img">
        <img src={el.image} alt={el.title} />
      </div>
      <div className="single__content">
        <h1>{el.title}</h1>
        <p>Scott</p>
        <p>Артикул : 7655-188</p>
        <p className="have">В наличии</p>
        <h2>
          ${el.price} <span>${el.oldPrice}</span>
        </h2>
        <p className="decs">{el.decs}</p>
        <div className="bts">
          <div className={`${toggle ? "btns" : "none"}`}>
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
          <button
            className={`${toggle ? "none" : "btn4"}`}
            onClick={() => {
              dispatch(addToCart(el)),
                toast.success("Maxsulot Cartga qo'shildi"),
                setToggle(!toggle);
            }}
          >
            В корзину
          </button>
          <button className="btn5" onClick={() => dispatch(toggleToWishes(el))}>
            {wishes.some((w) => w.id == el.id) ? (
              <FaHeart
                className="red"
                onClick={() => toast.error("Wishlistdan o'chirildi")}
              />
            ) : (
              <FaRegHeart
                className="re"
                onClick={() => toast.success("Wishlistga qo'shildi")}
              />
            )}
          </button>
          <button className={`${toggle ? "delete" : "none"}`}>
            <MdDeleteForever
              onClick={() =>
                dispatch(
                  removeFromCart(el),
                  setToggle(false),
                  toast.error("cartdan o'chirildi")
                )
              }
            />
          </button>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="container single">
      <div className="single__left">{card}</div>
      <ToastContainer
        autoClose={400}
        style={{ left: 0, bottom: 10, width: 250 }}
      />
    </div>
  );
};

export default Single;
