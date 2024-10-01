import { createStore } from 'redux'
import rootReducers from './rootReducers'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const store = createStore(rootReducers)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// if (store) {

//     const token = localStorage.getItem('token');

//     if (token) {
//         store.dispatch({ type: "GET_ACTIVE_USER" })
//     }
// }

export default store

