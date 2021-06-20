import { createAction,props } from "@ngrx/store";
import { User } from "./user";
export const signup = createAction('[Signup Page], Signup',
                        props<{user: User}>());

// const newSignupAction = signup({user:}); 