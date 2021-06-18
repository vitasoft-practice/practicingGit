import { combineReducers } from "redux";
import LoginReducers from "./login";

 export const reducers = combineReducers({
    Login: LoginReducers
});

export type State = ReturnType<typeof reducers>