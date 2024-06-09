import React, { useEffect } from "react";
import Like from "../components/like/Like";

const Wishlist = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Like />
    </div>
  );
};

export default Wishlist;
