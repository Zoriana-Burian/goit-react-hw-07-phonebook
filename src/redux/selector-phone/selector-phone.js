import { createSelector } from 'reselect';

export const getFilter = state => state.contacts.filter;
export const getItems = state => state.contacts.items;

export const visibleContacts = createSelector(
  [getItems, getFilter],
  (contacts, filter) => {
    return contacts.filter(contacts =>
      contacts.name.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);
