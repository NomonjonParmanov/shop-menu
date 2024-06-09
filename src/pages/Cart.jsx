import React, { useEffect } from "react";
import CartContent from "../components/cart/CartContent";
const Cart = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  return (
    <div>
      <CartContent />
    </div>
  );
};

export default Cart;
