import PropTypes from 'prop-types';
import { Item, Name, Number, StyledButton } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import contactsOperations from 'redux/contacts-operations';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const ContactItem = ({ contact }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();

  const removeContact = contactId => {
    dispatch(contactsOperations.deleteContact(contactId));
  };

  return (
    <Item key={id}>
      <AccountCircleIcon fontSize="large" color="primary" />
      <Name>{name}:</Name>
      <Number>{number}</Number>
      <StyledButton
        variant="contained"
        size="small"
        onClick={() => removeContact(id)}
      >
        Delete
      </StyledButton>
    </Item>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
