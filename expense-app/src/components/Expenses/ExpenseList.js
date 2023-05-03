import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

import "./ExpenseList.css";

const ExpenseList = (props) => {
  return (
    <Card className="expenses">
      {props.expenses.map((expense) => (
        <ExpenseItem key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default ExpenseList;
