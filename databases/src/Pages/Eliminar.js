import React from 'react'
//import Formulario from '../Components/Formulario'
import Boottom from '../Components/Boottom'
import './pages.css'

class Eliminar extends React.Component {
    render(){
        return (
            <div>
                <nav>
                    <Boottom link="/insertar" contenido="INSERTAR"/>
                    <Boottom link="/actualizar" contenido="ACTUALIZAR"/>
                    <Boottom link="/consultar" contenido="CONSULTAR"/>
                </nav>
                <div className="container">
                <form className="contact" method="delete">
                    <h3>Taller Base de datos</h3>
                    <h3>UNIVALLE</h3>
                    <h4>Eliminar Paciente</h4>
                    <fieldset>
                        <input placeholder="Id Paciente" name="identificacion" type="text" tabIndex="2" required/>
                    </fieldset>
                    <fieldset>
                        <button name="submit" type="submit" id="putForm-submit" data-submit="...Sending">Eliminar</button>
                    </fieldset>
                </form>
                </div>
            </div>
        )
    }
}

export default Eliminar;