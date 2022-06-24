import React, { useRef, useContext, useState } from "react";
import classes from "./MealItemForm.module.css";
import Button from "../../UI/Button";
import CartContext from "../../store/CartContext";
import Input from "../../UI/Input";
const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [amountisValid, setAmountIsValid] = useState(true);

  const addToCartHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount; // Adding + to convert it to number
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form onSubmit={addToCartHandler} className={classes.form}>
      <Input
        label="Amount"
        ref={amountInputRef}
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <Button type={"submit"} value={props.buttonVal}></Button>
      {!amountisValid && <p>Please enter a valid amount (1-5) </p>}
    </form>
  );
};

export default MealItemForm;
