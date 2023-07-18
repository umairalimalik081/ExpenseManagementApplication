import React, { useState } from "react";
import "./App.css";
import ExpensesList from "./Components/Expenses/ExpensesList";
import Card from "./Components/UI/Card";
import InputExpenses from "./Components/inputExpenses/InputExpenses";
import ExpensesFilter from "./Components/FilteredExpenses/ExpenseFilter";
import ExpensesChart from "./Components/Expenses/ExpensesChart";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },

  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2022, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2022, 5, 12),
  },
  {
    id: "e5",
    title: "Test (Wooden)",
    amount: 340,
    date: new Date(2021, 8, 12),
  },
  {
    id: "e6",
    title: "Test2 (Wooden)",
    amount: 555,
    date: new Date(2023, 3, 12),
  },
];
const App = () => {
  const [filteredYear, setFilteredYear] = useState("2019");
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    console.log("in app Js");
    console.log("new item", expense);

    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    // console.log(expenses);
  };

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  console.log(filteredYear);

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // let expensesContent = <p className="noExpenses">No Expenses Found</p>;
  // if (filteredExpenses.length > 0) {
  //   expensesContent = filteredExpenses.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ));

  return (
    <div>
      <InputExpenses onInputExpense={addExpenseHandler} />
      <li>
        <Card className="expenses">
          <ExpensesFilter
            selected={filteredYear}
            onChangeFilter={filterChangeHandler}
          />
          <ExpensesChart expenses={filteredExpenses} />
          <ExpensesList items={filteredExpenses} />
          {/* With And Operator
        {filteredExpenses.length === 0 && (
          <p className="noExpenses">No Expenses Found</p>
        )}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}

          {/* With Terniry operator 
        {filteredExpenses.length === 0 ? (
          <p className="noExpenses">No Expenses Found</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */}
        </Card>
      </li>
    </div>
  );
};

export default App;
