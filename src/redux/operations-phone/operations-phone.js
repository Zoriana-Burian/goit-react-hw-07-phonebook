import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
} from '../../redux/actions-phone/actions-phone';

axios.defaults.baseURL = 'http://localhost:4040';

export const fetchContact = () => async dispatch => {
  dispatch(fetchContactRequest());

  try {
    const { data } = await axios.get('/contacts');

    dispatch(fetchContactSuccess(data));
  } catch (error) {
    dispatch(fetchContactError(error));
  }
};

export const addContact = (name, number) => dispatch => {
  const contact = { name, number };

  dispatch(addContactRequest());
  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)));
};

export const deleteContacts = contactId => dispatch => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch(error => dispatch(deleteContactError(error)));
};
