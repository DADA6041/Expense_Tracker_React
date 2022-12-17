import { useState } from 'react';

import Card from '../Card/Card';
import ExpenseDate from '../ExpenseDate/ExpenseDate'
import './expenseItem.css'

export default function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  function handleClick(){
    setTitle('hi!');
    console.log(title);
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item-desc'>
        <h2>{title}</h2>
        <div className='expense-item-price'>${props.amount}</div>
      </div>
      <button onClick={handleClick}>Change Title</button>
    </Card>
  );
}
