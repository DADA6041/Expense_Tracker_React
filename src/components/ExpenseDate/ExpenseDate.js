import './expenseDate.css'

export default function ExpenseDate(props) {
  const year = props.date.toLocaleString('en-US', { year: "numeric" });
  const month = props.date.toLocaleString('en-US', { month: "short" });
  const day = props.date.toLocaleString('en-US', { day: "2-digit" });

  return (
    <div className='expense-date'>
      <div className='expense-date-month'>{month}</div>
      <div className='expense-date-year'>{year}</div>
      <div className='expense-date-day'>{day}</div>
    </div>
  )
}
