import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { updateBillStatus } from "../../../actions";
import AccordionParent from "../../ui/AccordionParent";
import AccordionChild from "../../ui/AccordionChild";

const PageContainer = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
`;

const PageBody = styled.section`
  width: 50%;
  margin: 0 auto;
`;

const HomePage = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state);
  const { bills, loading } = data;

  const onClickBill = (id, isBill) => {
    dispatch(updateBillStatus(id, isBill));
  };

  const billsAccordions = bills.map((i) => (
    <AccordionParent id={i.id} title={i.name} onButtonClick={onClickBill} isBill={i.isBill}>
      {i.transactions.map((t) => (
        <AccordionChild />
      ))}
    </AccordionParent>
  ));

  return (
    <PageContainer>
      {loading.isLoading ? (
        <PageBody>Bills and Expenses are loading</PageBody>
      ) : (
        <PageBody>{billsAccordions}</PageBody>
      )}
    </PageContainer>
  );
};

export default HomePage;
