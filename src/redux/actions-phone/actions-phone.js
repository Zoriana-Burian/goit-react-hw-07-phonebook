import { createAction } from "@reduxjs/toolkit";
import shortid from "shortid";

const addContact = createAction("contacts/Add", (name, number) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));
const deleteContacts = createAction("contacts/Delete");
const changeFilter = createAction("contacts/changeFilter");

const contactActions = { addContact, deleteContacts, changeFilter };
export default contactActions;
