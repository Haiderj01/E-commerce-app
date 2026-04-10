import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Checkout() {
  const { cart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Checkout</h2>
      <h3>Total: ${total}</h3>

      <button>Place Order</button>
    </div>
  );
}

export default Checkout;