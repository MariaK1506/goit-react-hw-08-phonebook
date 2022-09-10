import { createSlice } from '@reduxjs/toolkit';
import contactsOperations from './contacts-operations';

const initialState = {
  items: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [contactsOperations.fetchContacts.fulfilled](state, action) {
      state.items = action.payload;
    },
    [contactsOperations.addContact.fulfilled](state, action) {
      state.items = [...state.items, action.payload];
    },
    [contactsOperations.deleteContact.fulfilled](state, action) {
      state.items.filter(({ id }) => id !== action.payload);
    },
  },
  reducers: {
    changeFilter(state, action) {
      state.filter = action.payload;
      console.log(state.filter);
    },
  },
});

export const { changeFilter } = contactsSlice.actions;

export default contactsSlice.reducer;
