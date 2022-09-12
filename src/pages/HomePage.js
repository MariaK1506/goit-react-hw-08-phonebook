import { useSelector } from 'react-redux';
import { Navigate, NavLink, Link } from 'react-router-dom';
import authSelectors from '../redux/auth/auth-selectors';
import { Container } from 'components/Container/Container';

export default function HomePage() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      <Container>
        <h1>Welcome to phonebook</h1>
        {/* {isLoggedIn && <p>All your contacts are stored here</p>} */}
        {!isLoggedIn && (
          <>
            <p>
              Please <Link to="/register">register</Link> to create your
              contacts
            </p>
            <p>
              Or you can <NavLink to="/login">login</NavLink> to see your
              contacts
            </p>
          </>
        )}
      </Container>
    </>
  );
}
