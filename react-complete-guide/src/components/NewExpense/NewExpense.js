import React from "react";
import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = () => {
  return (
    <div className="new-expense">
      <ExpenseForm />
    </div>
  );
};

export default NewExpense;
