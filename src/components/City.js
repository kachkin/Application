import React, {PropTypes} from "react";
import "../styles/City.sass"

export default function City(props) {
    const {name, temp, sky} = props;
    const {removeCity} = props;
    return(
        <div className="city">
            <div className="name-city">{name}</div>
            <div className="temp-city">Температура: {temp}</div>
            <div className="sky-city">{sky}</div>
            <button className="btn" value={name} onClick={removeCity}>X</button>
        </div>
    )
}


City.propTypes={
    name:PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired,
    sky: PropTypes.string.isRequired,
    removeCity: PropTypes.func.isRequired
};