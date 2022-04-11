
import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
//rafce
const NewExpense = (props) => {

  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {

    const expenseData = {
      ...enteredExpenseData, //copying the expense data 
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  }
  const startEditingHandler = () => {
    setIsEditing(true);
  }
  const stopEditingHandler = () => {
    setIsEditing(false);
  }

  return (<div className='new-expense'>
    {!isEditing && <button onClick={startEditingHandler}> Add new Expense</button>}
    {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
  </div>

  )
}

export default NewExpense