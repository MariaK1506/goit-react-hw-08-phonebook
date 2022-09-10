import { useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import authOperations from 'redux/auth/auth-operations';
import { Container } from 'components/Container/Container';

export default function LoginPag() {
  const emailInputId = useMemo(() => nanoid(), []);
  const passwordInputId = useMemo(() => nanoid(), []);

  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(authOperations.logIn({ email, password }));

    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <h1>Login form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor={emailInputId}>
          E-mail
          <input
            value={email}
            onChange={handleChange}
            id={emailInputId}
            type="email"
            name="email"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <label htmlFor={passwordInputId}>
          Password
          <input
            value={password}
            onChange={handleChange}
            id={passwordInputId}
            type="password"
            name="password"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Sign in</button>
      </form>
    </Container>
  );
}
