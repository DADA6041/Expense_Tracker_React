import React, { useState } from 'react'
import './expenseForm.css';

export default function ExpenseForm(props) {
  const [inpTitle, setInpTitle] = useState('');
  const [inpAmount, setInpAmount] = useState('');
  const [inpDate, setInpDate] = useState('');
  // const [userInput, setUserInput] = useState({
  //   inpTitle: '',
  //   inpAmount: '',
  //   inpDate: ''
  // })

  function handleTitleChange(e){
    setInpTitle(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   inpTitle: e.target.value
    // });

    // 이전 state에 의존하는 state를 업데이트 시키기 위해선 콜백함수를 전달해 주는것이 최신을 유지하는것으로 인식
    // setUserInput((prevState) => {
    //   return { ...prevState, inpTitle: e.target.value };
    // });
  };

  function handleAmountChange(e){
    setInpAmount(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   inpAmount: e.target.value
    // });
  }

  function handleDateChange(e){
    setInpDate(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   inpDate: e.target.value
    // });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const expenseData = {
      title: inpTitle,
      amount: inpAmount,
      date: new Date(inpDate)
    };

    props.onSaveExpenseData(expenseData);
    setInpTitle('');
    setInpAmount('');
    setInpDate('');
  };


  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense-controls">
        <div className="new-expense-control">
          <label htmlFor="">Title</label>
          <input type="text" value={inpTitle} onChange={handleTitleChange} />
        </div>
        <div className="new-expense-control">
          <label htmlFor="">Amount</label>
          <input type="number" value={inpAmount} onChange={handleAmountChange} min="0.01" step="0.01" />
        </div>
        <div className="new-expense-control">
          <label htmlFor="">Date</label>
          <input type="date" value={inpDate} onChange={handleDateChange} min="2019-01-01" max="2022-12-31" />
        </div>
      </div>
      <div className="new-expense-actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}
