import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getWeather, removeCity}from "../actions/Actions";
import Cities from "../components/Cities"
import MenuAdd from "../components/MenuAdd";
import "../styles/App.sass"

class App extends Component{
    handleAddCity(e){
        e.preventDefault();
        var city = e.target.elements["add-city"].value;
        e.target.elements["add-city"].value="";
        this.props.getWeather(city);
    }
    handleRemoveCity(e){
        var city = e.target.value;
        this.props.removeCity(city);
    }
    render(){
        const {locations}=this.props;
        return(
            <div>
                <MenuAdd addCity={this.handleAddCity.bind(this)}/>
                <Cities removeCity={this.handleRemoveCity.bind(this)} locations={locations.locations} params={locations.params}/>
            </div>
        )

    }
}
function State(state) {
    return{
        locations: state.locations
    }
}
function Dispatch(dispatch) {
    return{
        getWeather: bindActionCreators(getWeather, dispatch),
        removeCity: bindActionCreators(removeCity, dispatch)
    }
}
export default connect(State, Dispatch)(App)