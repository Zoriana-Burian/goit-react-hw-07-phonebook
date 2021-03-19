import contactActions from "../actions-phone/actions-phone";
import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

const items = createReducer([], {
  [contactActions.addContact]: (state, { payload }) => {
    const ADD = state.filter((contact) => payload.name === contact.name);
    return ADD.length !== 1
      ? [...state, payload]
      : [...state] && alert(`${payload.name} is already in contacts.`);
  },
  [contactActions.deleteContacts]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const filter = createReducer("", {
  [contactActions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
