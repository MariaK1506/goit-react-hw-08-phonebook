const getContacts = state => state.contacts.items;
const getFilter = state => state.contacts.filter;
// console.log(getFilter);

const contactsSelectors = {
  getContacts,
  getFilter,
};

export default contactsSelectors;
