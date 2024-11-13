// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import formReducer from './reducer/formSlice';

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

export default store;
