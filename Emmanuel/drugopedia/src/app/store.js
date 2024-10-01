import { configureStore } from '@reduxjs/toolkit';
import loginSlice from '../lib/features/loginSlice';

export const store = configureStore({
  reducer: {
    login: loginSlice,   

  },
});