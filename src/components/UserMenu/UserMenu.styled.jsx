import styled from 'styled-components';
import { Button } from '@mui/material';

export const WelcomeBox = styled.div`
  display: flex;
  align-items: center;
`;

export const WelcomeName = styled.p`
  font-weight: 700;
  margin-right: 15px;
`;

export const StyledButton = styled(Button)`
  /* color: #1976d2;
  background-color: white; */

  /* &.active {
    color: white;
  } */

  :hover:not(.active),
  :focus:not(.active) {
    color: ${props => props.theme.colors.white};
  }
`;
