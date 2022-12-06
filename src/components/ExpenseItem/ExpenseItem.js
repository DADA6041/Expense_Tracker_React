import './expenseItem.css'

export default function ExpenseItem() {
    return (
        <div className='expense-item'>
            <div>Dec 7th 2022</div>
            <div className='expense-item-desc'>
                <h2>Car Insurance</h2>
                <div className='expense-item-price'>$250.14</div>
            </div>
        </div>
    )
}
