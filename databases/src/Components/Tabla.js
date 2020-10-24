import React from 'react'

class Tabla extends React.Component {

    pintarFila(pacientes) {
        
    }
    render() {
        return (
            <table>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Identificacion</th>
                </tr>
                {this.pintarFila(this.props.pacientes)}
            </table>
        );    
    }
}

export default Tabla;