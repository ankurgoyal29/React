import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import React, { useState } from "react"; // We dont need this anymore
import ExpensesFilter from "./ExpensesFilter";
import ExpenesesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
  const expenses = props.data;
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );
  console.log(filteredExpenses);

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          currentFilterValue={filteredYear}
          onFilterChange={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenesesList expenses={filteredExpenses} />
      </Card>
    </li>
  );
};

export default Expenses;
