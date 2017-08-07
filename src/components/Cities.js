import React, {PropTypes} from "react";
import City from "./City";

import "../styles/Cities.sass"

export default function Cities(props){
        const {params} = props;
        const {removeCity} = props;
        var i = 0;
        return(
            <div className="cities">
                {params.map(city =>{
                    return <City removeCity={removeCity}  name={city.city} key={i++} temp={city.temp} sky={city.sky}/>
                })}
            </div>
        )

}

Cities.propTypes={
    params: PropTypes.array.isRequired,
    removeCity: PropTypes.func.isRequired,
};