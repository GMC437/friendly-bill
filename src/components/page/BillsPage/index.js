import React from "react";
import { useSelector } from "react-redux";
import BasePage from "../BasePage";

const BillsPage = () => {
  const { data } = useSelector((state) => state);
  const { bills, loading } = data;
  const billsFiltered = bills.filter((i) => i.isBill === true);

  return <BasePage bills={billsFiltered} isLoading={loading.isLoading} />;
};

export default BillsPage;
