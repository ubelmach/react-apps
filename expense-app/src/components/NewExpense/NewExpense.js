import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [isFormVisible, setFormVisability] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.addExpenseHandler(expenseData);
  };

  const setFormVisabilityHandler = () => {
    setFormVisability(!isFormVisible);
  };

  if (isFormVisible) {
    return (
      <div className="new-expense">
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onFormVisabilityHandler={setFormVisabilityHandler}
        />
      </div>
    );
  }

  return (
    <div className="new-expense">
      <button onClick={setFormVisabilityHandler}>Add New Expense</button>
    </div>
  );
};

export default NewExpense;
