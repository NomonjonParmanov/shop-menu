import React, { useEffect } from "react";
import Hero from "../components/hero/Hero";
import Products from "../components/products/Products";
import NornLight from "../components/nornlight/NornLight";
import Brands from "../components/brands/Brands";
import Blog from "../components/blog/Blog";

const Home = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Hero />
      <NornLight />
      <Products />
      <Brands />
      <Blog />
    </div>
  );
};

export default Home;
