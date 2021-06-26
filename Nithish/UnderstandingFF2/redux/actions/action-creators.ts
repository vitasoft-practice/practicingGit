import { Dispatch } from "redux"
import { ActionType } from "./actions"


export const signIn = () =>{
    return(dispatch: Dispatch, getState: boolean) =>{
        dispatch({
            type: ActionType.SIGN_IN
        });
    }
}

export const signOut = () =>{
    return(dispatch: Dispatch) =>{
        dispatch({
            type: ActionType.SIGN_OUT
        });
    }
}