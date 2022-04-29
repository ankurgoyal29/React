import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import React from "react"; // We dont need this anymore

const Expenses = (props) => {
  const expenses = props.data;
  return (
    <Card className="expenses">
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
      {/* <ExpenseItem
        title={props.data[0].title}
        amount={props.data[0].amount}
        date={props.data[0].date}
      />
      <ExpenseItem
        title={props.data[1].title}
        amount={props.data[1].amount}
        date={props.data[1].date}
      />
      <ExpenseItem
        title={props.data[2].title}
        amount={props.data[2].amount}
        date={props.data[2].date}
      /> */}
    </Card>
  );
};

export default Expenses;
