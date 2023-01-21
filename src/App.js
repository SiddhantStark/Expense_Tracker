//import ExpensesItem from "./Components/ExpensesItems";
import React , { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
//import "./Components/ExpensesItems.css";
import NewExpense from "./Components/NewExpenses/NewExpense";

const DUMMY=[
  {
    id:'e1',
    title:'Survey Corps Full Sleeve T',
    amount:'700',
    date: new Date(2022,11,11),
  },
  {
    id:'e2',
    title:'Batman Hoodie',
    amount:'1200',
    date: new Date(2022,11,10),
  }
];


const App = () => {
  
  const [expenses , setExpenses] =useState(DUMMY);
  
  const expenseDataHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense , ...prevExpenses];
    });
 };

  return (
  
  <div>

      <NewExpense OnAddExpense={expenseDataHandler}/>
      <Expenses items={expenses}/>

  </div>
  );
}

export default App;
