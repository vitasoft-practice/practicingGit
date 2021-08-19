import counterReducer from "./counterReducer";
import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
const rootReducer = combineReducers({
    counter:counterReducer,
    
});

export default rootReducer;