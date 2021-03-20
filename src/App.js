import React, { useEffect } from 'react';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import { useDispatch } from 'react-redux';
import * as contactOperations from './redux/operations-phone/operations-phone';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactOperations.fetchContact());
  }, [dispatch]);

  // useEffect(() => dispatch(contactOperations.fetchContact()), [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <Filter />
      <h2>Contacts</h2>
      <ContactList />
    </div>
  );
}
