import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/countersAction';

type InitialType = {
    count: number
}
const initialVal = {
    count: 0
};
type Actiontype = {
    type:string
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
        default:
            return state;
    }
}
export default countersReducer