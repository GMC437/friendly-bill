import React from "react";
import { useSelector } from "react-redux";
import BasePage from "../BasePage";

const HomePage = () => {
  const { data } = useSelector((state) => state);
  const { bills, loading } = data;

  return <BasePage bills={bills} isLoading={loading.isLoading} />;
};

export default HomePage;
