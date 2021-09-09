import React, { Component } from "react";
import Historial from './Historial';
import Pathway from './Pathway';
import data from './data.json';

class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            actual: data[0],
            contador: 1,
            historial: [],
            anterior: ""
        }
    }

    componentDidUpdate = () => {this.state.historial.unshift(this.state.anterior)}

    handlerClick = (e) => {
        const opcion = e.target.value
        const startValue = this.state.contador + 1; 
        const id = startValue + e.target.value.toLowerCase(); 
        const next = data.find(object => object.id == id); 
       
        if(next != null){
            this.setState({
                actual: next,
                contador: startValue,
                anterior: opcion
            })
        }else{
            alert("Historia finalizada");
        }
    }


    render(){
        return(
            <div className="layout">
                <h1 className="historia">{this.state.actual.historia}</h1>
                <Pathway 
                    handlerClick = {this.handlerClick}                
                    opcionA={this.state.actual.opciones.a}
                    opcionB={this.state.actual.opciones.b}
                />
                <Historial anterior={this.state.anterior} historial={this.state.historial}/>
            </div>
        )
    }
}

export default Main;