import React from "react";
import { BLOG } from "../static";
const BlogPage = () => {
  let blog = BLOG?.map((el) => (
    <div className="card">
      <img src={el.img} alt={el.title} />
      <h3>{el.title}</h3>
      <p>{el.data}</p>
    </div>
  ));
  return (
    <div className="container blog__page">
      <h1>Блог</h1>
      <div className="cards">
        {blog}
        {blog}
      </div>
    </div>
  );
};

export default BlogPage;
