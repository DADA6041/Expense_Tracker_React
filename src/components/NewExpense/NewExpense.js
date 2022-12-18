import React from 'react'
import ExpenseForm from '../ExpenseForm/ExpenseForm';
import './newExpense.css';

export default function NewExpense(props) {
  const handleSaveExpenseDate = (inpExpenseData) => {
    const expenseData = {
      ...inpExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={handleSaveExpenseDate} />
    </div>
  )
}
