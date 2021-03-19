import s from './ContactList.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import * as contactOperations from '../../redux/operations-phone/operations-phone';

const ContactList = () => {
  const contacts = useSelector(state =>
    visibleContacts(state.contacts.items, state.contacts.filter),
  );
  const dispatch = useDispatch();
  const OnDeleteContact = id => dispatch(contactOperations.deleteContacts(id));
  return (
    <ul className={s.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.contacts} key={id}>
          <p className={s.name}>{name}:</p>
          <p className={s.number}>{number}</p>
          <button
            type="button"
            onClick={() => OnDeleteContact(id)}
            className={s.button}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propType = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  OnDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;

const visibleContacts = (contacts, filter) => {
  return contacts.filter(contacts =>
    contacts.name.toLowerCase().includes(filter.toLowerCase()),
  );
};
