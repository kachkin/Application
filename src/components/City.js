import React, {PropTypes} from "react";
import {Col, Button} from "react-bootstrap"
import "../styles/City.sass"

export default function City(props) {
    const {name, temp, sky} = props;
    const {removeCity} = props;
    return(
        <Col sm={12} className="city">
            <Col sm={2}/>
            <Col sm={2}>
                {name}
            </Col>
            <Col sm={3}>
                Температура: {temp}
            </Col>
            <Col sm={3}>
                {sky}
            </Col>
            <Col sm={2}>
                <Button value={name} onClick={removeCity}>
                    X
                </Button>
            </Col>
        </Col>
    )
}

// <div className="city">
//     <div className="name-city"></div>
//     <div className="temp-city">Температура: {temp}</div>
//     <div className="sky-city">{sky}</div>
//     <button className="btn" value={name} onClick={removeCity}>X</button>
// </div>

City.propTypes={
    name:PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired,
    sky: PropTypes.string.isRequired,
    removeCity: PropTypes.func.isRequired
};