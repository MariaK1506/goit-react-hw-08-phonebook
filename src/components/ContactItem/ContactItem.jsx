import PropTypes from 'prop-types';
import { Item, Name, Number, Button } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import contactsOperations from 'redux/contacts-operations';

export const ContactItem = ({ contact }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();

  const removeContact = contactId => {
    dispatch(contactsOperations.deleteContact(contactId));
  };

  return (
    <Item key={id}>
      <Name>{name}:</Name>
      <Number>{number}</Number>
      <Button onClick={() => removeContact(id)}>
        {/* <Button onClick={() => dispatch(contactsOperations.deleteContact(id))}> */}
        Delete
      </Button>
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
