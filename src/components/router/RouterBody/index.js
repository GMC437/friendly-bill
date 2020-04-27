import React from "react";
import { Route } from "react-router-dom";
import HomePage from "../../page/HomePage";
import BillsPage from "../../page/BillsPage";
import ExpensesPage from "../../page/ExpensesPage";

const RouterBody = () => {
  return  (
    <>
      <Route path="/" exact component={HomePage} />
      <Route path="/bills" component={BillsPage} />
      <Route path="/expenses" component={ExpensesPage} />
    </>
  );;
};

export default RouterBody;
