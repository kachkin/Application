import weather from "npm-openweathermap";
import {
    GET_WEATHER_REQUEST,
    GET_WEATHER_SUCCESS,
    GET_WEATHER_ERROR,
    REMOVE_CITY,
    CHECK_LOCAL_STORAGE
} from "../constants/Constants";
weather.api_key = "6d233c0323db9708a0f37935ac4b33fb";

export function getWeather(city) {
    var a = city[0].toUpperCase();
    city=a + city.slice(1);
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
                }
            ).catch(error=>{
                dispatch({
                    type: GET_WEATHER_ERROR,
                    error:error
                })
            })
        }
    )
}

export function removeCity(city){
    return (dispatch=>{
        dispatch({
            type:REMOVE_CITY,
            payload:{
                city:city
            }
        })
    })
}