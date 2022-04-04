
import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
//rafce
const NewExpense = (props) => {

  const saveExpenseDataHandler = (enteredExpenseData) =>{

      const expenseData = {
        ...enteredExpenseData, //copying the expense data 
        id: Math.random().toString()
      }   ;
      props.onAddExpense(expenseData);
  }

  return ( <div className='new-expense'> 
    <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
  </div>
  
  )
}

export default NewExpense