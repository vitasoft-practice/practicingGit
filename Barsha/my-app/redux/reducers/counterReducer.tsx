import { INCREMENT_COUNTER,DECREMENT_COUNTER , CounterInterface , counter_action } from "../actions/counterAction";


// type CounterState ={
//     counter:CounterInterface
// }

// const initialState:CounterState{
//     counter:[value:0]
// }

const counterReducer = (state:CounterInterface={value:0}, action:counter_action) => {
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