import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Color, FontSize, Margin, Padding } from "./styles";
import { faBook, faBroom, faFilm, faGamepad, faGlobe, faMobile, faNewspaper, faProjectDiagram, faShippingFast, faSoap, faStream, faTv, faUndo, faUserFriends, faUsers, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { SidebarItem } from "./SidebarItem";

const StyledSidebar = styled.aside`
  width: 200px;
  min-height: 100vh;
  background-color: ${Color.dark};
  color: ${Color.light};
  padding: ${Padding.default};
`;

const Title = styled.h1`
  font-size: ${FontSize.larger};
`;

const Nav = styled.nav`
  padding-top: ${Padding.default};
  padding-bottom: ${Padding.default};
`;

const SidebarSection = styled.div`
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: ${FontSize.small};
  margin-bottom: ${Margin.default};
  margin-top: ${Margin.default};
`;

export const Sidebar: FunctionComponent = () => {
  return (
    <StyledSidebar>
      <Title>All the Things Tracker</Title>
      <Nav>
        <SidebarItem title="All" icon={faStream} />
        <SidebarSection>Personal</SidebarSection>
        <SidebarItem title="Hygiene" icon={faSoap} />
        <SidebarItem title="Chores" icon={faBroom} />
        <SidebarSection>People</SidebarSection>
        <SidebarItem title="Family" icon={faUsers} />
        <SidebarItem title="Friends" icon={faUserFriends} />
        <SidebarItem title="Coworkers" icon={faUserTie} />
        <SidebarSection>Coding</SidebarSection>
        <SidebarItem title="Websites" icon={faGlobe} />
        <SidebarItem title="Apps" icon={faMobile} />
        <SidebarSection>Writing</SidebarSection>
        <SidebarItem title="Books" icon={faBook} />
        <SidebarItem title="Articles" icon={faNewspaper} />
        <SidebarSection>Reading</SidebarSection>
        <SidebarItem title="Books" icon={faBook} />
        <SidebarItem title="Articles" icon={faNewspaper} />
        <SidebarSection>Watching</SidebarSection>
        <SidebarItem title="Movies" icon={faFilm} />
        <SidebarItem title="TV Shows" icon={faTv} />
        <SidebarItem title="Video Games" icon={faGamepad} />
        <SidebarSection>Waiting For</SidebarSection>
        <SidebarItem title="Deliveries" icon={faShippingFast} />
        <SidebarItem title="Returns" icon={faUndo} />
      </Nav>
    </StyledSidebar>
  );
};
