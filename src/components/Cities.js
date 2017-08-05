import React, {Component, PropTypes} from "react";
import City from "./City";

export default class Cities extends Component{
    render(){
        const {params, locations} = this.props;
        const {removeCity} = this.props;
        var i = 0;
        return(
            <div className="cities">
                {params.map(city =>{
                    return <City removeCity={removeCity}  name={locations[i]} key={i++} temp={city.temp} sky={city.sky}/>
                })}
            </div>
        )
    }
}

Cities.propTypes={
    params: PropTypes.array.isRequired,
    removeCity: PropTypes.func.isRequired,
    locations: PropTypes.array.isRequired
};