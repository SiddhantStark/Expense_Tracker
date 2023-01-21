import React from 'react';
import './ExpensesList.css';
import ExpensesItem from './ExpensesItems';

const ExpensesList = (props) =>{
  //  let expensesContent = <p>No Expenses found</p> ;

    if(props.items.length===0){
    return <h2 className='expenses-list__fallback'>Found No Expenses</h2>
    }

    return (

        <ul className='expense-list'>
            {props.items.map((expense) => (
            <ExpensesItem
             key={expense.id}
             title={expense.title}
             amount={expense.amount}
             date={expense.date}
            />
            ))}
        </ul>
    );
}

export default ExpensesList;