import weather from "npm-openweathermap";
import {
    GET_WEATHER_REQUEST,
    GET_WEATHER_SUCCESS,
    REMOVE_CITY
} from "../constants/Constants";
weather.api_key = "6d233c0323db9708a0f37935ac4b33fb";

export function getWeather(city) {
    var a = city[0].toUpperCase();
    city = a + city.slice(1);
    return (dispatch => {
            dispatch({
                type: GET_WEATHER_REQUEST,
                payload: {}
            });
            weather.get_weather_custom("city", city, "weather").then(result => {
                    dispatch({
                        type: GET_WEATHER_SUCCESS,
                        payload: {
                            result: result,
                            city: city
                        }
                    })
                },
                function(error){
                    console.log(error);
                }
            )
        }
    )
}

export function removeCity(city) {
    return {
        type: REMOVE_CITY,
        payload: {
            city: city
        }
    }
}
