import React, { Component } from "react";

class Pathway extends Component {
    render(){
        return(
            <div className="opciones">
                <label htmlFor="A" className="opcion">
                <input className="botones" type="button" name="A" value="A" onClick={this.props.handlerClick}/> 
                {this.props.opcionA} </label>
               
                <label htmlFor="B" className="opcion">
                <input className="botones" type="button" name="B" value="B" onClick={this.props.handlerClick}/>
                {this.props.opcionB}</label>
            </div>
        )
    }
}

export default Pathway;