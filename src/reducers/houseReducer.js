import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function houseReducer(state = initialState.houses, action) {
    switch(action.type) {
        case types.LOAD_SUCCESS:
            return action.houses;
        default:
            return state;
    }
}
