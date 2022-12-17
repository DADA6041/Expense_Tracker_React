import React from 'react'
import './expenseForm.css';

export default function ExpenseForm() {
  return (
    <form action="">
      <div className='new-expense-controls'>
        <div className='new-expense-control'>
          <label htmlFor="">Title</label>
          <input type="text" />
        </div>
        <div className='new-expense-control'>
          <label htmlFor="">Amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className='new-expense-control'>
          <label htmlFor="">Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" />
        </div>
      </div>
      <div className='new-expense-actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}