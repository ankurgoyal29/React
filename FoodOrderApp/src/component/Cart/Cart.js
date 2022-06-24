import React, { useContext } from "react";
import CartContext from "../store/CartContext";
import classes from "./Cart.module.css";
import Button from "../UI/Button";

import CartItems from "./CartItems";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const hasItems = cartCtx.items.length > 0;
  return (
    <div>
      <CartItems />
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${cartCtx.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.footer}>
        <Button
          value="Close"
          onClick={props.onClose}
          class={classes.close}
        ></Button>
        {hasItems && <Button value="Order" class={classes.order}></Button>}
      </div>
    </div>
  );
};

export default Cart;
