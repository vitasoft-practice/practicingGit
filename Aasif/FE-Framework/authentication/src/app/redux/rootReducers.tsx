import countersReducer from './reducers/countersReducer'
import { combineReducers } from 'redux'

const rootReducers = combineReducers({

    counter: countersReducer,

})

export default rootReducers