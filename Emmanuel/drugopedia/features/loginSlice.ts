// features/loginSlice.ts
import { createSlice } from '@reduxjs/toolkit';

interface LoginState {
  isLoggedIn: boolean;
  user: {
    id: number;
    name: string;
    email: string;
  } | null;
}

const initialState: LoginState = {
  isLoggedIn: false,
  user: null,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const { loginSuccess, logout } = loginSlice.actions;

export const selectIsLoggedIn = (state : any) => state.login.isLoggedIn;
export const selectUser = (state : any) => state.login.user;

export default loginSlice.reducer;