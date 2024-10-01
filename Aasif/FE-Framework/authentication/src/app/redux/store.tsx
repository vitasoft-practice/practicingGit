import { createStore } from 'redux'
import rootReducers from './rootReducers'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const store = createStore(rootReducers)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// const token = localStorage.getItem('token');

// if (token) {
//     axios.defaults.headers.common.Authorization = "Bearer " + token
// }

export default store

