import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  background-color: #f8f8f8;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  transform: ${(props) => (props.isSelected ? "translateY(62%)" : "none")};

  transition-duration: 0.8s;

  transition-property: transform, border-bottom-left-radius;
  border-bottom-left-radius: ${(props) => (props.isSelected ? "0px" : "none")};

  box-shadow: 0 0 0px 1px #c4c4c4;
  animation: ${(props) => (props.isSelected ? "1.2s spread infinite" : "none")};

  @keyframes spread {
    0% {
      box-shadow: 0 0 4px 3px rgba(0, 0, 0, 0.1);
    }
    50% {
      box-shadow: 0 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    100% {
      box-shadow: 0 0 4px 3px rgba(0, 0, 0, 0.1);
    }
  }
`;
const Circle = ({ isSelected, children }) => {
  return <Wrapper isSelected={isSelected}>{children}</Wrapper>;
};
export default Circle;
