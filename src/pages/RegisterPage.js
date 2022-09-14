import { useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import { Container } from 'components/Container/Container';

import { Box, TextField, Button, Typography } from '@mui/material';

export default function RegisterPage() {
  // const nameInputId = useMemo(() => nanoid(), []);
  // const emailInputId = useMemo(() => nanoid(), []);
  // const passwordInputId = useMemo(() => nanoid(), []);

  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          textAlign: 'center',
          marginTop: '20px',
        }}
      >
        Registration form
      </Typography>
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
            marginTop: '10px',
            width: '100%',
          }}
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          required
        />

        <TextField
          label="Email"
          variant="outlined"
          sx={{
            marginTop: '10px',
            width: '100%',
          }}
          value={email}
          onChange={handleChange}
          type="email"
          name="email"
          required
        />

        <TextField
          label="Password"
          variant="outlined"
          sx={{
            marginTop: '10px',
            width: '100%',
          }}
          value={password}
          onChange={handleChange}
          type="password"
          name="password"
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
          Register
        </Button>
      </Box>
    </Container>
  );
}
