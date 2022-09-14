// import { StyledLink } from 'pages/NotFoundPage/NotFoundPage.styled';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  font-size: 18px;
  color: ${props => props.theme.colors.black};

  &.active {
    color: ${props => props.theme.colors.accent};
  }

  :hover:not(.active),
  :focus:not(.active) {
    color: ${props => props.theme.colors.accent};
  }
`;

export default function NotFoundPage() {
  return (
    <div>
      <h1>Sorry, we couldn't find this page :(</h1>
      <p>Please go to {<StyledLink to="/">Home</StyledLink>}</p>
    </div>
  );
}
