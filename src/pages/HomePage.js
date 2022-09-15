import { useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import authSelectors from '../redux/auth/auth-selectors';
import { Container } from 'components/Container/Container';
import { WrapperSection } from 'components/Section/Section.styled';
import { Typography } from '@mui/material';

export default function HomePage() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      <Container>
        <WrapperSection>
          {isLoggedIn && (
            <>
              <Typography
                variant="h2"
                component="h2"
                gutterBottom
                sx={{
                  textAlign: 'center',
                  marginTop: '30px',
                  fontWeight: '700',
                  marginBottom: '40px',
                }}
              >
                Welcome to phonebook.
              </Typography>

              <Typography
                variant="h5"
                component="p"
                gutterBottom
                sx={{
                  textAlign: 'center',
                  marginTop: '10px',
                  fontWeight: '400',
                }}
              >
                Filter, add and remove your contacts. Let us know if you don't
                like the app, we will try to improve it as soon as possible.
              </Typography>
            </>
          )}

          {!isLoggedIn && (
            <>
              <Typography
                component="p"
                variant="h2"
                sx={{
                  textAlign: 'center',
                  fontSize: '30px',
                  fontWeight: '700',
                  marginBottom: '20px',
                }}
              >
                Welcome to phonebook.
              </Typography>
              <Typography
                component="p"
                variant="body1"
                sx={{
                  textAlign: 'center',
                  fontSize: '18px',
                }}
              >
                Please <Link to="/register">register</Link> to create your
                contacts
              </Typography>
              <Typography
                component="p"
                variant="body1"
                sx={{
                  textAlign: 'center',
                  fontSize: '18px',
                }}
              >
                Or you can <NavLink to="/login">login</NavLink> to see your
                contacts
              </Typography>
            </>
          )}
        </WrapperSection>
      </Container>
    </>
  );
}
