import React , {useState} from 'react';
//import ExpensesItem from './ExpensesItems';
import ExpensesFilter from '../Expenses/ExpensesFilter';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
//JUST ABOUT OUTPUTTING ITEMS
const [year,setSelectedYear] = useState('2023');

const filterChangeHandler = (selectedYear) => {
  //console.log(selectedYear);
  setSelectedYear(selectedYear);
}

const filteredExpenses = props.items.filter(expenses => {
  return expenses.date.getFullYear().toString() === year; 
});



    return (

    <div>

    <Card className='expenses'>
    <ExpensesFilter selected={year} onChangeFilter={filterChangeHandler}/>
    <ExpensesChart expenses={filteredExpenses}/>
    <ExpensesList items={filteredExpenses}/>
      
    </Card>
    
    </div>
    );
}

export default Expenses;