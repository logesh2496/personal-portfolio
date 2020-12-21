import React, { useState } from "react";
import styled from "styled-components";
import Circle from "../../components/circle";
import StackInfo from "../../components/stack-info";
import { stacks } from "../../helper/util";
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
  max-height: 200px;
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
const StackContent = () => {
  const [stack, setStack] = useState(stacks.REACT);
  return (
    <Wrapper>
      <CircleWrapper>
        <Circle>
          <img
            src="./images/react-logo.png"
            style={{ width: "65px" }}
            onClick={() => setStack(stacks.REACT)}
          />
        </Circle>
        <Circle>
          <img
            src="./images/html-css-js.png"
            style={{ width: "62px" }}
            onClick={() => setStack(stacks.JS)}
          />
        </Circle>
        <Circle>
          <img
            src="./images/aspnet.png"
            style={{ width: "55px" }}
            onClick={() => setStack(stacks.ASPNET)}
          />
        </Circle>
        <Circle>
          <img
            src="./images/code-svg.svg"
            style={{ width: "58px" }}
            onClick={() => setStack(stacks.OTHERS)}
          />
        </Circle>
      </CircleWrapper>
      <InfoContainter>
        <StackInfo stack={stack} />
      </InfoContainter>
    </Wrapper>
  );
};

export default StackContent;
