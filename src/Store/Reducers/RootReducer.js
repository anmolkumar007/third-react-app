import {combineReducers} from 'redux';
import counterReducer from './CounterReducer'
import medicineReducer from './MedicineReducer'

const rootReducer = combineReducers({
    counterReducer,
    medicineReducer
})

export default rootReducer;