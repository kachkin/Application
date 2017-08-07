import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as actions from "../actions/Actions";
import Cities from "../components/Cities"
import MenuAdd from "../components/MenuAdd";
import "../styles/App.sass"

class App extends Component{
    handleAddCity(e){
        e.preventDefault();
        let city = e.target.elements["add-city"].value;
        e.target.elements["add-city"].value="";
        this.props.actions.getWeather(city);
    }
    handleRemoveCity(e){
        let city = e.target.value;
        this.props.actions.removeCity(city);
    }
    render(){
        const {locations}=this.props;
        console.log(this.props);
        return(
            <div>
                <MenuAdd addCity={(e)=>this.handleAddCity(e)}/>
                <Cities removeCity={(e)=>this.handleRemoveCity(e)} params={locations.params}/>
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
        actions: bindActionCreators(actions,dispatch)
    }
}
export default connect(State, Dispatch)(App)