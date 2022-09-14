import { useDispatch, useSelector } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import authSelectors from '../../redux/auth/auth-selectors';
import { WelcomeBox, WelcomeName, StyledButton } from './UserMenu.styled';
import Typography from '@mui/material/Typography';

function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <WelcomeBox>
      <WelcomeName>
        Welcome,
        <Typography
          variant="h6"
          component="span"
          // gutterBottom
          sx={{
            color: '#feed00',
            marginLeft: '10px',
          }}
        >
          {name}
        </Typography>{' '}
      </WelcomeName>
      <StyledButton
        variant="contained"
        size="small"
        type="button"
        sx={{
          color: '#1976d2',
          backgroundColor: 'white',
        }}
        onClick={() => dispatch(authOperations.logOut())}
      >
        Sign Out
      </StyledButton>
    </WelcomeBox>
  );
}
export default UserMenu;
