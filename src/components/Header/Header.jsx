import { useSelector } from 'react-redux';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import authSelectors from 'redux/auth/auth-selectors';
import { HeaderBox } from './Header.styled';

export default function Header() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  // console.log(isLoggedIn);
  return (
    <HeaderBox>
      <Navigation />
      {/* <UserMenu />
      <AuthNav /> */}
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </HeaderBox>
  );
}
