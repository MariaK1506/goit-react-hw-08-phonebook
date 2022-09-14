import { useSelector } from 'react-redux';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import authSelectors from 'redux/auth/auth-selectors';
import { AppBar, Toolbar } from '@mui/material';

export default function Header() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          justifyContent: 'space-between',
        }}
      >
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </AppBar>
  );
}
