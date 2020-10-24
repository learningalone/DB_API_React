import React from 'react'
//import Formulario from '../Components/Formulario'
import Boottom from '../Components/Boottom'
import './pages.css'

class Actualizar extends React.Component {
    render(){
        return (
            <div>
                <nav>
                    <Boottom link="/insertar" contenido="INSERTAR"/>
                    <Boottom link="/eliminar" contenido="ELIMINAR"/>
                    <Boottom link="/consultar" contenido="CONSULTAR"/>
                </nav>
                <div className="container">
                <form className="contact" method="post">
                    <h3>Taller Base de datos</h3>
                    <h3>UNIVALLE</h3>
                    <h4>Actualizar Paciente</h4>
                    <fieldset>
                        <input placeholder="Nombre Paciente" name="nombre" type="text" tabIndex="1" requred="true" autoFocus/>
                    </fieldset>
                    <fieldset>
                        <input placeholder="Apellido Paciente" name="apellido" type="text" tabIndex="1" required="ture" autoFocus />
                    </fieldset>
                    <fieldset>
                        <input placeholder="Id Paciente" name="identificacion" type="text" tabIndex="2" required/>
                    </fieldset>
                    <fieldset>
                        <button name="submit" type="submit" id="putForm-submit" data-submit="...Sending">Actualizar</button>
                    </fieldset>
                </form>
                </div>
            </div>    
        )
    }
}

export default Actualizar;