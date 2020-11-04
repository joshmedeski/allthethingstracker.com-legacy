import React, {FunctionComponent} from "react";
import styled from 'styled-components'
import {Color, FontSize, Padding} from "./styles";

const Wrapper = styled.section`
  display: flex;
  min-height: 100vh;
`;

const Sidebar = styled.aside`
  width: 200px;
  min-height: 100vh;
  background-color: ${Color.dark};
  color: ${Color.light};
  padding: ${Padding.default};
`

const SiteTitle = styled.h1`
  font-size: ${FontSize.larger};
`

const Main = styled.main`
`

export const Dashboard: FunctionComponent = ({children}) => {
  return (
    <Wrapper>
      <Sidebar>
        <SiteTitle>
          All the Things Tracker
        </SiteTitle>
      </Sidebar>
      <Main>{children}</Main>
    </Wrapper>)
}
