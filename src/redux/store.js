import contactsReducer from './reducer-phone/reducer-phone';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

// const contactsPersistConfig = {
//   key: "contact",
//   storage,
//   blacklist: ["filter"],
// };
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

//export const persistor = persistStore(store);
