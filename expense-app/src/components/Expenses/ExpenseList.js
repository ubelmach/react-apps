import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

import "./ExpenseList.css";
import ExpensesFilter from "./ExpensesFilter";

const ExpenseList = (props) => {
  const [newExpenses, setNewExpenses] = useState(props.expenses);
  const [filteredYear, setFilteredYear] = useState('2020');

  const filteredExpenseListHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    
    setNewExpenses(prevMovies => ([...prevMovies, ...props.expenses]));
    
    let filteredExpensesList = newExpenses.filter((expense) => {
      let expenseYear = expense.date.getFullYear();
      return Number(expenseYear) === Number(selectedYear);
    });
    setNewExpenses(filteredExpensesList);
  };

  return (
    <>
      <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onFilteredExpenseListHandler={filteredExpenseListHandler} />
        {newExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </>
  );
};

export default ExpenseList;
