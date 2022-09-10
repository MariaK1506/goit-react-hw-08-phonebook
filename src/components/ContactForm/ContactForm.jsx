import { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Form, Label, Input, Button } from './ContactForm.styled';
import contactsSelectors from 'redux/contacts-selectors';
import contactsOperations from 'redux/contacts-operations';

export default function ContactForm() {
  const nameInputId = useMemo(() => nanoid(), []);
  const numberInputId = useMemo(() => nanoid(), []);

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

    toast.success('Contact is added');
    formReset();
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor={nameInputId}>
          Name
          <Input
            value={name}
            onChange={handleInputChange}
            id={nameInputId}
            type="text"
            name="name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label htmlFor={numberInputId}>
          Number
          <Input
            value={number}
            onChange={handleInputChange}
            id={numberInputId}
            type="tel"
            name="number"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    </>
  );
}
