import weather from "npm-openweathermap";
import {
    GET_WEATHER_REQUEST,
    GET_WEATHER_SUCCESS,
    REMOVE_CITY,
    CHANGE_WEATHER
} from "../constants/Constants";
weather.api_key = "09fa2bb9adf79c5643146c50b36a2415";

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

export function changeWeather(cities) {
    return (dispatch=>{
        for(let i = 0; i<cities.length; i++){
            dispatch({
                type: GET_WEATHER_REQUEST,
                payload: {}
            });
            weather.get_weather_custom("city", cities[i].city, "weather").then(result => {
                    dispatch({
                        type: CHANGE_WEATHER,
                        payload: {
                            result: result,
                            city: cities[i].city
                        }
                    })
                },
                function(error){
                    console.log(error);
                }
            )
        }
    })
}

export function removeCity(city) {
    return {
        type: REMOVE_CITY,
        payload: {
            city: city
        }
    }
}
