import React, { useState } from "react";
import ExpensesForm from "./ExpensesForm";
import "./InputExpenses.css";

const InputExpenses = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const expenseFormDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onInputExpense(expenseData);
    // setIsEditing(false);
  };
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpensesForm
          onExpenseFormData={expenseFormDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default InputExpenses;
