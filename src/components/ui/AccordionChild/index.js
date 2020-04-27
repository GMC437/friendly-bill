import React from "react";
import styled from "styled-components";

const ItemContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 2px
`;

const AccordionChild = ({id, amount, date}) => {
    return (
        <ItemContainer key={id} >
          <span>cost: £{amount}</span>
          <span>received: {date}</span>
        </ItemContainer>
      );
};

export default AccordionChild;
