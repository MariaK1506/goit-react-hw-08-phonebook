import { useDispatch, useSelector } from 'react-redux';
// import { Label, Input } from './Filter.styled';
import contactsSelectors from 'redux/contacts-selectors';
import { changeFilter } from 'redux/contactsSlice';
import {TextField} from '@mui/material';

export const Filter = () => {
  
  const dispatch = useDispatch();
  const filterSearch = useSelector(contactsSelectors.getFilter);

  const changeFilterSearch = event => {
    dispatch(changeFilter(event.currentTarget.value));
  };

  return (
    <TextField
      label="Find contacts by name"
      variant="outlined"
      sx={{
        marginTop: '20px',
        marginBottom: '10px',
        width: '695px',
      }}
      value={filterSearch}
      onChange={changeFilterSearch}
      type="text"
      name="filter"
      required
    />
  );
};
