import React, { useState } from "react";
import styled from "styled-components";

const AccordionContainer = styled.div`
  width: 100%;
`;

const AccordionHeader = styled.div`
  background-color: #0815FF;
  color: white;
  margin: 4px;
  padding: 18px;
  width: 100%;
  text-align: left;
  border: none;
  outline: none;
  transition: 0.4s;
  border: 2px black solid;
  border-radius: 10px;
`;

const AccordionSection = styled.div`
  width: 100%;
  padding: 0 18px;
`;

const AccordionTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AccordionButton = styled.button`
  border: 1px black solid;
  border-radius: 10px;
  background: white;
`;

const AccordionParent = ({ title, buttonTitle, onButtonClick, children }) => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <AccordionContainer>
      <AccordionHeader
        onClick={() => {
          setIsHidden(!isHidden);
        }}
      >
        <AccordionTitle>
          <span>{title}</span>
          {buttonTitle && (
            <AccordionButton
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                onButtonClick(title);
              }}
            >
              {buttonTitle}
            </AccordionButton>
          )}
        </AccordionTitle>
        <div>
          <div>number of items: {children.length}</div>
        </div>
      </AccordionHeader>
      <AccordionSection hidden={isHidden}>{children}</AccordionSection>
    </AccordionContainer>
  );
};

export default AccordionParent;
