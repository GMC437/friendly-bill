import React from "react";
import { useSelector } from "react-redux";
import BasePage from "../BasePage";

const ExpensesPage = () => {
  const { data } = useSelector((state) => state);
  const { bills, loading } = data;
  const expensesFiltered = bills.filter((i) => i.isBill === false);

  return <BasePage bills={expensesFiltered} isLoading={loading.isLoading} />;
};

export default ExpensesPage;
