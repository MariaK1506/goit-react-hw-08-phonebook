import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import contactsSelectors from 'redux/contacts-selectors';
import contactsOperations from 'redux/contacts-operations';
import { Box, TextField, Button } from '@mui/material';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const formReset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = event => {
    event.preventDefault();

    const newContact = {
      name: name,
      number: number,
    };

    contacts.find(contact => contact?.name.toLowerCase() === name.toLowerCase())
      ? toast.error(`${name} is already in contacts`)
      : dispatch(contactsOperations.addContact(newContact));

    formReset();
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          width: '400px',
          marginRight: 'auto',
          marginLeft: 'auto',
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          label="Name"
          variant="outlined"
          sx={{
            width: '100%',
          }}
          value={name}
          onChange={handleInputChange}
          type="text"
          name="name"
          required
        />

        <TextField
          label="Number"
          variant="outlined"
          id="outlined-number"
          sx={{
            marginTop: '10px',
            width: '100%',
          }}
          value={number}
          onChange={handleInputChange}
          type="tel"
          name="number"
          placeholder="000-00-00"
          required
        />
        <Button
          variant="contained"
          size="large"
          sx={{
            marginTop: '10px',
          }}
          type="submit"
        >
          Add contact
        </Button>
      </Box>
    </>
  );
}
