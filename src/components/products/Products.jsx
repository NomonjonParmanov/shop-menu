import React, { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("https://6634b1d69bb0df2359a2696b.mockapi.io/api/Products")
      .then((res) => setData(res.data));
  }, []);

  let product = data?.map((el) => (
    <div key={el.id} className="card">
      <img src={el.url} alt={el.title} />
      <h2>{el.title}</h2>
      <h3>
        ${el.price} <span>${el.oldPrice}</span>
      </h3>
    </div>
  ));
  return (
    <div className="container products">
      <div className="product__header">
        <h1>Популярные товары</h1>
        <button>Все товары</button>
      </div>
      <div className="product__cards">{product}</div>
      <button className="all">Все товары</button>
    </div>
  );
};

export default Products;
