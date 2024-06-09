import React, { useEffect } from "react";
import AboutContent from "../components/about/AboutContent";
import Brands from "../components/brands/Brands";
import Blog from "../components/blog/Blog";

const About = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  return (
    <div>
      <AboutContent />
      <Brands />
      <Blog />
    </div>
  );
};

export default About;
