import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";

const AllExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);
  return (
    <ExpensesOutput fallBackText="No registered expenses found!" expenses={expensesCtx.expenses} expensesPeriod="Total" />
  );
};

export default AllExpenses;
