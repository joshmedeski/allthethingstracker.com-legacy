import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Color, FontSize, Padding } from "./styles";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  display: flex;
  color: ${Color.light};
  font-size: ${FontSize.largerX2};
  line-height: 1;
  align-items: center;
  margin-bottom: 12px;
`;

const Title = styled.div`
  color: ${Color.light};
`;

const Icon = styled(FontAwesomeIcon)`
  color: ${Color.light};
  margin-right: ${Padding.default};
  min-width: 30px;
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
