import React from "react";
import styled from "styled-components";
import Circle from "../../components/circle";
// import { ReactComponent as ReactIcon } from "./svg/react.svg";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const InfoContainter = styled.div`
  margin-top: 50px;
  height: 200px;
  width: 80%;

  background: rgba(248, 248, 248, 0.4);
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
`;
const CircleWrapper = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
const StackContent = (params) => {
  return (
    <Wrapper>
      <CircleWrapper>
        <Circle>
          <img src="./images/react-logo.png" style={{ width: "65px" }} />
        </Circle>
        <Circle>
          <img src="./images/html-css-js.png" style={{ width: "62px" }} />
        </Circle>
        <Circle>
          <img src="./images/aspnet.png" style={{ width: "55px" }} />
        </Circle>
        <Circle>
          <img src="./images/nodejs.png" style={{ width: "62px" }} />
        </Circle>
      </CircleWrapper>
      <InfoContainter>React</InfoContainter>
    </Wrapper>
  );
};

export default StackContent;
