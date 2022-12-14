import { useSelector, useDispatch } from 'react-redux';
import { useMemo, useEffect } from 'react';

import { ContactItem } from 'components/ContactItem/ContactItem';
import { StyledList } from './ContactsList.styled';
import contactsSelectors from 'redux/contacts-selectors';
import contactsOperations from 'redux/contacts-operations';

export const ContactsList = () => {
  const contacts = useSelector(contactsSelectors.getContacts);
  const filter = useSelector(contactsSelectors.getFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const filteredContact = useMemo(() => {
    return (
      contacts?.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      ) ?? []
    );
  }, [filter, contacts]);

  return (
    filteredContact && (
      <StyledList>
        {filteredContact.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </StyledList>
    )
  );
};
