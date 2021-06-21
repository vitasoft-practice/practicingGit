import countersReducer from './countersReducer'
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const rootReducers = combineReducers({

    counter: countersReducer,
    form: formReducer

})

export default rootReducers