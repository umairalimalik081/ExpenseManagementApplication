import React, { useState } from "react";
import "./ExpensesForm.css";

const ExpensesForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //Alternative to use multiple states
  // const [userInput,setUserInput] = useState({
  //     enteredTitle:'',
  //     enteredAmount:'',
  //     enteredDate:''
  // });

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);

    //setting multiplr in one state

    //    setUserInput({
    //     ...userInput,
    //     enteredTitle : e.target.value
    //    });

    //another approach
    //  setUserInput((prevState)=>{
    //     return {
    //         ...prevState,
    //         enteredTitle:e.target.value
    //     }
    //  })
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);

    //multiple in one state
    // setUserInput({
    //     ...userInput,
    //     enteredAmount : e.target.value
    //    });

    //other approach
    // setUserInput((prevState)=>{
    //     return {
    //         ...prevState,
    //         enteredAmount:e.target.value
    //     }
    //  })
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);

    // setUserInput({
    //     ...userInput,
    //     enteredDate : e.target.value
    //    });

    //another approach
    //     setUserInput((prevState)=>{
    //         return {
    //             ...prevState,
    //             enteredDate:e.target.value
    //         }
    //      })
    //
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onExpenseFormData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label> Title </label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label> Amount </label>
          <input
            type="number"
            value={enteredAmount}
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label> Date </label>
          <input
            type="date"
            value={enteredDate}
            onChange={dateChangeHandler}
            min="2019-01-01"
            max="2023-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          {" "}
          Cancel{" "}
        </button>
        <button type="submit"> Add Expenses </button>
      </div>
    </form>
  );
};
export default ExpensesForm;
