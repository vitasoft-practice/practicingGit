import { INCREMENT_COUNTER,DECREMENT_COUNTER , Icounter , counter_action } from "../actions/counterAction";


const counterReducer = (state:Icounter={value:0}, action:counter_action) => {
    switch(action.type){
        case INCREMENT_COUNTER:
            return {...state, value:state.value+1};
        case DECREMENT_COUNTER:
            return {...state, value:state.value-1};
        default:
            return{...state};
    }
};

export default counterReducer;