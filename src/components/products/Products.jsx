import React from "react";
import { useGetProductsQuery } from "../../context/productApi";
import { FaRegHeart, FaCartPlus, FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toggleToWishes } from "../../context/wishlistSlice";
import { ToastContainer, toast } from "react-toastify";
import { addToCart } from "../../context/cartSlice";
import "react-toastify/dist/ReactToastify.css";
import { Link, NavLink } from "react-router-dom";
const Products = () => {
  let wishes = useSelector((state) => state.wishlist.value);
  console.log(wishes);
  const dispatch = useDispatch();
  const { data } = useGetProductsQuery();
  let slice = data?.slice(0, 8);
  let product = slice?.map((el) => (
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
  return (
    <div className="container products">
      <div className="product__header">
        <h1>Популярные товары</h1>
        <button>
          <NavLink to={"/allProducts"}>Все товары</NavLink>
        </button>
      </div>
      <div className="product__cards">{product}</div>
      <button className="all">
        <NavLink to={"/allProducts"}>Все товары</NavLink>
      </button>
      <ToastContainer
        autoClose={400}
        style={{ left: 0, bottom: 10, width: 250 }}
      />
    </div>
  );
};

export default Products;
