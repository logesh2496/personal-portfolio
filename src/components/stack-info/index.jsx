import React from "react";
import styled from "styled-components";
import { stacks } from "../../helper/util";
import {
  AspContent,
  ElevatorPitch,
  JsContent,
  OtherContent,
  ReactContent,
} from "../stack-content";

const InfoWrapper = styled.div`
  max-height: inherit;
  height: 100%;
  color: #888888;
`;

const StackInfo = ({ stack }) => {
  let content;
  switch (stack) {
    case stacks.REACT:
      content = <ReactContent />;
      break;
    case stacks.JS:
      content = <JsContent />;
      break;
    case stacks.ASPNET:
      content = <AspContent />;
      break;
    case stacks.OTHERS:
      content = <OtherContent />;
      break;
    default:
      content = <ElevatorPitch />;
  }

  return <InfoWrapper>{content}</InfoWrapper>;
};

export default StackInfo;
