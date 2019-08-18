import * as types from './actionTypes';
import HouseApi from '../api/HousesApi';

export function loadHousesSuccess(houses) {
    return {type: types.LOAD_SUCCESS, houses};
}

export function loadHouses() {
    return function(dispatch) {
        return HouseApi.getAllHouses().then(houses => {
            dispatch(loadHousesSuccess(houses));
        }).catch(error => {
            throw(error);
        });
    };
}
