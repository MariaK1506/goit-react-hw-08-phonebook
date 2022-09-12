import { useSelector } from 'react-redux';
import { Navigate, NavLink, Link } from 'react-router-dom';
import authSelectors from '../../redux/auth/auth-selectors';
import { StyledLink } from './Navigation.styled';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav>
      <StyledLink to="/">Home</StyledLink>
      {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
    </nav>
  );
};

export default Navigation;
