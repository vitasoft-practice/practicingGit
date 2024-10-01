import { INCREMENT_COUNTER, DECREMENT_COUNTER, SET_SEARCH } from '../actions/countersAction';

type InitialType = {
    count: number,
    search: string
}
const initialVal = {
    count: 0,
    search: ""
};
type Actiontype = {
    type:string,
    payload?: any
}
const countersReducer = (state: InitialType = initialVal, action: Actiontype) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return {
                ...state,
                count: state.count + 1
            };
        case DECREMENT_COUNTER:
            return {
                ...state,
                count: state.count - 1
            };
        case SET_SEARCH:
            return {
                ...state,
                search: action.payload
            };
        default:
            return state;
    }
}
export default countersReducer