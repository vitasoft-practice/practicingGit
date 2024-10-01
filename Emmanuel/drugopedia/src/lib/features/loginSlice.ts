// features/loginSlice.ts
import { createSlice } from '@reduxjs/toolkit';

interface LoginState {
  isLoggedIn: boolean;
  cPage: string;
  lPage: string;
  books: string;
  access_token: string;
    user: {
    username: string;  
    access_token: string;
  } | null;
}

const initialState: LoginState = {
  isLoggedIn: false,
  cPage: "Home",
  lPage: "Home",
  books: ";",
  access_token: "",
  user: null,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.lPage = state.cPage;
      state.cPage = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setBooks: (state, action) => {
      state.books = action.payload;
    },
    setToken: (state, action) => {
      state.access_token = action.payload;
    },
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
      state.books = action.payload.bookmarks;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const { setPage, setUser, setBooks, setToken, loginSuccess, logout } = loginSlice.actions;

export const selectCPage = (state : any) => state.login.cPage;
export const selectLPage = (state : any) => state.login.lPage;
export const selectIsLoggedIn = (state : any) => state.login.isLoggedIn;
export const selectUser = (state : any) => state.login.user;
export const selectBooks = (state : any) => state.login.books;
export const selectToken = (state : any) => state.login.access_token;

export default loginSlice.reducer;