import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Sidebar } from "./Sidebar";
import { Padding } from "./styles";

const Preview = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
  background-color: hsl(46, 100%, 64%);
  color: hsl(0, 0%, 0%);
  padding: 5px;
  text-align: center;
`;

const Wrapper = styled.section`
  display: flex;
`;

const Main = styled.main`
  padding: ${Padding.default};
`;

export const Dashboard: FunctionComponent = ({ children }) => {
  return (
    <>
      <Preview>Preview</Preview>
      <Wrapper>
        <Sidebar />
        <Main>{children}</Main>
      </Wrapper>
    </>
  );
};
