import { Container } from 'components/Container/Container';
import ContactForm from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Typography } from '@mui/material';

export default function ContactsPage() {
  return (
    <Container>
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          textAlign: 'center',
          marginTop: '20px',
          width: '100%',
        }}
      >
        Phonebook
      </Typography>
      <ContactForm />
      <Filter />
      <ContactsList />
    </Container>
  );
}
