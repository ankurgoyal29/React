import React, { useContext } from "react";

import classes from "./CartItems.module.css";
import Button from "../UI/Button";
import CartContext from "../store/CartContext";

const CartItems = (props) => {
  const cartCtx = useContext(CartContext);

  const removeItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const addItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  return (
    <div>
      <ul className={classes["cart-items"]}>
        {cartCtx.items.map((item) => {
          return (
            <li key={item.id}>
              <div className={classes.mealInfo}>
                <div>
                  <h3> {item.name}</h3>
                  <div className={classes.price}>
                    <span>${item.price}</span>
                    <input
                      value={"x " + item.amount}
                      className={classes.amount}
                      readOnly
                    ></input>
                  </div>
                </div>
                <div>
                  <Button
                    value="-"
                    class={classes.plusMinus}
                    onClick={removeItemHandler.bind(null, item.id)} //This ensures that id of the to be added or removed item is passes to the remove handler- bind insures that the passed param is binded to the function when it gets called before it gets called.
                  ></Button>
                  <Button
                    value="+"
                    class={classes.plusMinus}
                    onClick={addItemHandler.bind(null, item)}
                  ></Button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CartItems;
