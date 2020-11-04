import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Color, FontSize, Padding } from "./styles";
import {
  faBook,
  faBorderAll,
  faBroom,
  faCalendarAlt,
  faCalendarCheck,
  faCheckSquare,
  faFilm,
  faGamepad,
  faGlobe,
  faGuitar,
  faHandshake,
  faHourglassEnd,
  faMobile,
  faNewspaper,
  faPlayCircle,
  faProjectDiagram,
  faRecordVinyl,
  faSearch,
  faShippingFast,
  faSoap,
  faStream,
  faTv,
  faUndo,
  faUserFriends,
  faUsers,
  faUserTie,
  faWalking,
} from "@fortawesome/free-solid-svg-icons";
import { SidebarItem } from "./SidebarItem";

const StyledSidebar = styled.aside`
  width: 180px;
  min-height: 100vh;
  background-color: ${Color.dark};
  padding: ${Padding.default};
`;

const Title = styled.h1`
  color: hsl(0, 0%, 100%);
  font-size: ${FontSize.larger};
`;

const Nav = styled.nav`
  padding-top: ${Padding.default};
  padding-bottom: ${Padding.default};
`;

const SidebarSection = styled.div`
  color: hsl(0, 0%, 75%);
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 14px;
  margin-bottom: 8px;
  margin-top: 18px;
`;

export const Sidebar: FunctionComponent = () => {
  return (
    <StyledSidebar>
      <Title>All the Things Tracker</Title>
      <Nav>
        <SidebarSection>Dashboards</SidebarSection>
        <SidebarItem title="Next" icon={faCheckSquare} />
        <SidebarItem title="Projects" icon={faProjectDiagram} />
        <SidebarItem title="Upcoming" icon={faCalendarCheck} />
        <SidebarItem title="Expiring" icon={faHourglassEnd} />
        <SidebarItem title="Eisenhower" icon={faBorderAll} />
        <SidebarSection>Events</SidebarSection>
        <SidebarItem title="Appointments" icon={faCalendarCheck} />
        <SidebarItem title="Meetings" icon={faHandshake} />
        <SidebarItem title="Concerts" icon={faGuitar} />
        <SidebarSection>Personal</SidebarSection>
        <SidebarItem title="Hygiene" icon={faSoap} />
        <SidebarItem title="Exercise" icon={faWalking} />
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
        <SidebarSection>Listening</SidebarSection>
        <SidebarItem title="Vinyls" icon={faRecordVinyl} />
        <SidebarItem title="Streaming" icon={faPlayCircle} />
        <SidebarSection>Watching</SidebarSection>
        <SidebarItem title="Movies" icon={faFilm} />
        <SidebarItem title="TV Shows" icon={faTv} />
        <SidebarItem title="Video Games" icon={faGamepad} />
        <SidebarSection>Waiting For</SidebarSection>
        <SidebarItem title="Deliveries" icon={faShippingFast} />
        <SidebarItem title="Returns" icon={faUndo} />
        <SidebarSection>Other</SidebarSection>
        <SidebarItem title="Scheduled" icon={faCalendarAlt} />
        <SidebarItem title="Someday" icon={faCalendarAlt} />
        <SidebarItem title="All" icon={faStream} />
      </Nav>
    </StyledSidebar>
  );
};
