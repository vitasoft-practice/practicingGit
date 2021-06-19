import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/countersAction'
const initialVal = 0;
type Actiontype = {
    type:string
}
const countersReducer = (state: number = initialVal, action: Actiontype) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return state + 1;
        case DECREMENT_COUNTER:
            return state - 1;
        default:
            return initialVal;
    }
}
export default countersReducer