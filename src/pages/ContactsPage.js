import { Container } from 'components/Container/Container';
import ContactForm from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactsList } from 'components/ContactsList/ContactsList';

export default function ContactsPage() {
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <Filter />
      <ContactsList />
    </Container>
  );
}
