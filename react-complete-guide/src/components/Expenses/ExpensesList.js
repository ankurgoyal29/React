import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.expenses.length > 0) {
    return (
      <ul className="expense-list">
        {props.expenses.map(
          //this returns a list of ExpeneseItem components
          (expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          )
        )}
      </ul>
    );
  }
  return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
};

export default ExpensesList;
