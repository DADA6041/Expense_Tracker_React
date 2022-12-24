import { useState } from "react";
import Card from "../Card/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./expenses.css";

export default function Expenses({ expenses }) {
  const [yearSelected, setYearSelected] = useState("2020");

  const handleFilterChange = (selecedYear) => {
    setYearSelected(selecedYear);
    console.log(selecedYear);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        yearSelected={yearSelected}
        setYearSelect={setYearSelected}
        onChangeFilter={handleFilterChange} />
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} />
    </Card>
  );
}
