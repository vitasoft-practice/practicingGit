import { DefaultRootState } from "react-redux";
import { AnyAction } from "redux";

const isLogged = (state = false, action : AnyAction)=>{
    switch(action.type){
        case 'SIGN_IN':
            return !state;
        case 'SIGN_OUT':
            return !state;
        default:
            return state;
    }
}
export default isLogged;