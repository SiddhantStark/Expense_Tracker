import React from 'react';
import './ExpensesItems.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate'

const ExpensesItem = (props) => {
    // const expenseDate = new Date(2022,1,8);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = '20,000';

    //const [title, setTitle] = useState(props.title);
    
    // const clickHandler = () => {
    //     setTitle('Updated!');
    //     console.log(title);
    // };

    // const month =props.date.toLocaleString('en-US',{month: 'long'});
    // const day =props.date.toLocaleString('en-US',{day: '2-digit'});
    // const year =props.date.getFullYear();

//JUST ABOUT OUTPUTTING THE EXPENSES OF ITEM
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2 className='expense-item'>{props.title}</h2>
                <div className='expense-item__price'>Rs.{props.amount}</div>
            </div>
            {/* <button onClick={clickHandler}>Change title</button> */}
        </Card>
    );
}

export default ExpensesItem;