import React, { Component } from "react";

class Historial extends Component {
    render() {
        return(
            <div className="recordatorio">
                <h3>Última opción elegida: {this.props.anterior}</h3>
                <h3>Elegido anteriormente: </h3>
                <ul>{this.props.historial.map((item, i) => <li key={i}>{item}</li>)}</ul>
            </div>
        )
    }
}

export default Historial;