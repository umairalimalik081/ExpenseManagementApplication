import React from "react";
import ExpensesForm from "./ExpensesForm";
import './InputExpenses.css';

const InputExpenses = (props) => {

    const expenseFormDataHandler = (enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onInputExpense(expenseData);
    }
    return(
    <div className="new-expense">
    <ExpensesForm onExpenseFormData={expenseFormDataHandler}/>
    </div>
)
};

export default InputExpenses;