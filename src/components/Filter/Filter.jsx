import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { Label, Input } from './Filter.styled';
import contactsSelectors from 'redux/contacts-selectors';
import changeFilter from 'redux/contactsSlice';

export const Filter = () => {
  const filterInputId = nanoid();

  const dispatch = useDispatch();
  const filterSearch = useSelector(contactsSelectors.getFilter);

  const changeFilterSearch = event => {
    dispatch(changeFilter(event.currentTarget.value));
  };

  return (
    <Label htmlFor={filterInputId}>
      Find contacts by name
      <Input
        value={filterSearch}
        onChange={changeFilterSearch}
        id={filterInputId}
        type="text"
        name="filter"
        required
      />
    </Label>
  );
};
