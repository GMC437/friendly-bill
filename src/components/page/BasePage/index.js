import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
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

const BasePage = ({bills, isLoading}) => {
    const dispatch = useDispatch();

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
        {isLoading ? (
          <PageBody>Bills and Expenses are loading</PageBody>
        ) : (
          <PageBody>{billsAccordions}</PageBody>
        )}
      </PageContainer>
    );
};

export default BasePage;
