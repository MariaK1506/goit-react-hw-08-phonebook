import { useSelector, useDispatch } from 'react-redux';
import { useMemo, useEffect } from 'react';

import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactsList.styled';
import contactsSelectors from 'redux/contacts-selectors';
import contactsOperations from 'redux/contacts-operations';

export const ContactsList = () => {
  const contacts = useSelector(contactsSelectors.getContacts);
  console.log(contacts);
  const filter = useSelector(contactsSelectors.getFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const filteredContacts = useMemo(() => {
    return (
      contacts?.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      ) ?? []
    );
  }, [filter, contacts]);

  // console.log(filtredContacts);

  // return (
  //   <List>
  //     {filteredContacts &&
  //       filteredContacts.map(contact => (
  //         <ContactItem key={contact.id} contact={contact} />
  //       ))}
  //   </List>
  // );

  return (
    filteredContacts && (
      <List>
        {filteredContacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </List>
    )
  );
};
