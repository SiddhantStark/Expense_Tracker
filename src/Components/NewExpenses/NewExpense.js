import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
         const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
         };

         //console.log(expenseData);
         props.OnAddExpense(expenseData);
         setIsEditing(false);
    }

    const addNewExpenseHandler = () => {
       setIsEditing(true);
    }
    
    const cancelAddNewExpenses = () => {
        setIsEditing(false);
    }
    
    return (
        <div className='new-expense'>
           {!isEditing && <button onClick={addNewExpenseHandler}>Add New Expense</button>}
           {isEditing && <ExpenseForm OnSaveExpenseData={saveExpenseDataHandler} 
           onCancel={cancelAddNewExpenses}/>}
        </div>
    )
}

export default NewExpense;