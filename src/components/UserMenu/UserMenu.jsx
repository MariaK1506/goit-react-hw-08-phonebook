import { useDispatch, useSelector } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import authSelectors from '../../redux/auth/auth-selectors';
import { WelcomeBox } from './UserMenu.styled';
import { WelcomeName } from './UserMenu.styled';

function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <WelcomeBox>
      {/* <img src={avatar} alt="" width="32" style={styles.avatar} /> */}
      <WelcomeName>Welcome, {name}</WelcomeName>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Sign Out
      </button>
    </WelcomeBox>
  );
}
export default UserMenu;
