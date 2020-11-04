import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  display: flex;
  color: hsl(0, 0%, 100%);
  line-height: 1;
  align-items: center;
  margin-bottom: 10px;
`;

const Icon = styled(FontAwesomeIcon)`
  color: hsl(0, 0%, 40%);
  font-size: 16px;
  margin-right: 8px;
  min-width: 20px;
`;

const Title = styled.div`
  color: hsl(0, 0%, 100%);
  font-size: 20px;
`;

export const SidebarItem: FunctionComponent<{ icon: IconDefinition; title: string }> = ({
  icon,
  title,
}) => {
  return (
    <Wrapper>
      <Icon icon={icon} />
      <Title>{title}</Title>
    </Wrapper>
  );
};
