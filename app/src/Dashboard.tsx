import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Sidebar } from "./Sidebar";
import { Padding } from "./styles";

const Wrapper = styled.section`
  display: flex;
  min-height: 100vh;
`;

const Main = styled.main`
  padding: ${Padding.default};
`;

export const Dashboard: FunctionComponent = ({ children }) => {
  return (
    <Wrapper>
      <Sidebar />
      <Main>{children}</Main>
    </Wrapper>
  );
};
