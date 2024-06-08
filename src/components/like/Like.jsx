import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleToWishes } from "../../context/wishlistSlice";
import { FaRegHeart, FaHeart, FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { addToCart } from "../../context/cartSlice";
import "react-toastify/dist/ReactToastify.css";
const Like = () => {
  let dispatch = useDispatch();
  const wishes = useSelector((state) => state.wishlist.value);
  let card = wishes?.map((el) => (
    <div key={el.id} className="card">
      <Link to={`/product/${el.id}`}>
        <img src={el.image} alt={el.title} />
      </Link>
      <h2>{el.title.substring(0, 31)}</h2>
      <div className="prices">
        <h3>
          <span>${el.oldPrice}</span>${el.price}
        </h3>
        <button
          className="btn3"
          onClick={() => {
            dispatch(addToCart(el)), toast.success("Maxsulot Cartga qo'shildi");
          }}
        >
          <FaCartPlus />
        </button>
      </div>
      <button className="btn2" onClick={() => dispatch(toggleToWishes(el))}>
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
    </div>
  ));
  return wishes.length > 0 ? (
    <div className="container like">
      <h1>Избранные товары</h1>
      <div className="cards">{card}</div>
      <ToastContainer
        autoClose={400}
        style={{ left: 0, bottom: 10, width: 250 }}
      />
    </div>
  ) : (
    <h2>empty</h2>
  );
};

export default memo(Like);
