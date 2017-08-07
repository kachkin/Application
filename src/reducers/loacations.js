import {
    GET_WEATHER_SUCCESS,
    REMOVE_CITY,
    CHECK_LOCAL_STORAGE
} from "../constants/Constants";
import * as constants from "redux-persist/constants"
const initialState = {
    params: []
};
export default function locations(state = initialState, action) {
    switch (action.type) {
        case GET_WEATHER_SUCCESS:
            return {
                ...state,
                params:[...state.params, {
                    city: action.payload.city,
                    temp: Math.round(action.payload.result.main.temp - 273),
                    sky: action.payload.result.weather[0].description
                }]
            };
        case REMOVE_CITY:
            return {...state,
            params: state.params.filter(element => element.city!==action.payload.city)};
        case constants.REHYDRATE:
         return (action.payload.locations? action.payload.locations: state);
        default:
            return state;
    }
}

