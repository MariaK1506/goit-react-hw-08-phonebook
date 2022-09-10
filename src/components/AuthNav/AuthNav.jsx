import { StyledLink } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <div>
      <nav>
        <StyledLink to="/register">Register</StyledLink>
        <StyledLink to="/login">Login</StyledLink>
      </nav>
    </div>
  );
}
