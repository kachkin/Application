import {
    GET_WEATHER_SUCCESS,
    REMOVE_CITY,
    CHECK_LOCAL_STORAGE
} from "../constants/Constants";
import * as constants from "redux-persist/constants"
const initialState = {
    locations: [],
    params:[]
};
export default function locations(state = initialState, action) {
    switch (action.type) {
        case GET_WEATHER_SUCCESS:
                state.locations.push(
                    action.payload.city
                );
                state.params.push(
                    {
                        temp: Math.round(action.payload.result.main.temp - 273),
                        sky: action.payload.result.weather[0].description
                    }
                );
            return {...state};
        case REMOVE_CITY:
            state.params.splice(state.locations.indexOf(action.payload.city),1);
            state.locations.splice(state.locations.indexOf(action.payload.city),1);
            return{...state};
        case constants.REHYDRATE:
            state = action.payload.locations;
            return{...state}
        default:
            return state;
    }
}

