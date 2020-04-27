import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchBillsData, fetchCategoriesData } from "../../../actions";

const RouterNav = () => {
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(fetchBillsData());
      dispatch(fetchCategoriesData());
    },
    [dispatch]
  );

  return <div>Router Nav</div>;
};

export default RouterNav;
