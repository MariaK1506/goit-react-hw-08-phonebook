import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  font-size: 24px;
  color: white;

  &.active {
    color: ${props => props.theme.colors.black};
  }

  :hover:not(.active),
  :focus:not(.active) {
    color: ${props => props.theme.colors.black};
  }
`;
