import { combineReducers } from "redux";
import LoginReducers from "./login";
import { reducer as formReducer } from "redux-form";

export const reducers = combineReducers({
    Login: LoginReducers,
    form: formReducer
});

export type State = ReturnType<typeof reducers>