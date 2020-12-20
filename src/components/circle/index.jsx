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
`;
const Circle = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
export default Circle;
