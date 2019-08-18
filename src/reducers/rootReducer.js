import {combineReducers} from 'redux';
import houses from './houseReducer';

const rootReducer = combineReducers({
    // short hand property names
    houses
})

export default rootReducer;
