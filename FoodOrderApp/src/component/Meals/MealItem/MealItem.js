import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../store/CartContext";
const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const addToCardHander = (amount) => {
    console.log("calling cartCtx");
    cartCtx.addItem({
      id: props.id,
      name: props.mealName,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <div className={classes.meal}>
      <div>
        <h3>{props.mealName}</h3>
        <div className={classes.description}>{props.desc}</div>
        <div className={classes.price}>${props.price.toFixed(2)}</div>
      </div>
      <MealItemForm
        onAddToCart={addToCardHander}
        id={props.id}
        buttonVal="+ Add"
      ></MealItemForm>
    </div>
  );
};

export default MealItem;
