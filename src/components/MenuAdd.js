import React, {Component, PropTypes} from "react";

import "../styles/MenuAdd.sass"

export default class MenuAdd extends Component{
    render(){
        const {addCity} = this.props;
        return(
            <div className="menu-add">
                <form onSubmit={addCity}>
                    <input id="add-city" autoComplete="off" type="text" placeholder="Введите город"/>
                    <button className="btn" type="submit"> Добавить </button>
                </form>
            </div>
        )
    }
}

MenuAdd.propTypes={
    addCity: PropTypes.func.isRequired
};