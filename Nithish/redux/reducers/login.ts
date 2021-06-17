import { DefaultRootState } from "react-redux";
import { AnyAction } from "redux";
import { ActionType } from "../actions/actions";

const initialState = false;
type Action = {
    type: string
}

const LoginReducers = (state: boolean = initialState, action : Action)=>{
    switch(action.type){
        case ActionType.SIGN_IN:
            return !state;
        case ActionType.SIGN_OUT:
            return !state;
        default:
            return state;
    }
}
export default LoginReducers;