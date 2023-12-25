// src/app/store.js

import { configureStore } from '@reduxjs/toolkit';
import autoSlice from './autoSlice';

const store = configureStore({
  reducer: {
    auth: autoSlice,
   
  },
});

export default store;