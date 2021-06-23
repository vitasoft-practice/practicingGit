import { DefaultRootState } from "react-redux";
import { AnyAction } from "redux";
import { ActionType } from "../actions/actions";

const initialState = false;
type Action = {
    type: string
}

const LoginReducers = (state = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.SIGN_IN:
            return true;
        case ActionType.SIGN_OUT:
            return false;
        default:
            return state;
    }
}
export default LoginReducers;