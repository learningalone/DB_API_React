import React from 'react'
import './Formulario.css'

class Formulario extends React.Component {

    pintarCampo(tipo){
        if(tipo=="name")
            return (
                <fieldset>
                    <input placeholder="Nombre Paciente" name="nombre" type="text" tabIndex="1" requred="true" autoFocus/>
                </fieldset>);
        if(tipo=="apellido")
            return (
                <fieldset>
                    <input placeholder="Apellido Paciente" name="apellido" type="text" tabIndex="1" required="ture" autoFocus />
                </fieldset>);
        if(tipo=="id")
            return (
                <fieldset>
                    <input placeholder="Id Paciente" name="identificacion" type="text" tabIndex="2" required/>
                </fieldset>);
        else
            return(
                <fieldset>
                    <button name="submit" type="submit" id="putForm-submit" data-submit="...Sending">{tipo}</button>
                </fieldset>);
    }

    Campos(num,descripcion){
        if(num==3)
            return (
                <form className="contact" method="post">
                    <h3>Taller Base de datos</h3>
                    <h3>UNIVALLE</h3>
                    <h4>{descripcion}</h4>
                    {this.pintarCampo("name")}
                    {this.pintarCampo("apellido")}
                    {this.pintarCampo("id")}
                    {this.pintarCampo("Enviar")}
                </form>);
        if(num==2)
            return (
                <form className="contact" method="post">
                    <h3>Taller Base de datos</h3>
                    <h3>UNIVALLE</h3>
                    <h4>{descripcion}</h4>
                    {this.pintarCampo("name")}
                    {this.pintarCampo("apellido")}
                    {this.pintarCampo("id")}
                    {this.pintarCampo("Actualizar")}
                </form>);
        if(num==1)
            return (
                <form className="contact" method="delete">
                    <h3>Taller Base de datos</h3>
                    <h3>UNIVALLE</h3>
                    <h4>{descripcion}</h4>
                    {this.pintarCampo("id")}
                    {this.pintarCampo("Eliminar")}
                </form>);
        if(num==0)
            return (
                <form className="contact" method="get">
                    <h3>Taller Base de datos</h3>
                    <h3>UNIVALLE</h3>
                    <h4>{descripcion}</h4>
                    {this.pintarCampo("Consultar")}
                </form>);
    }

    render(){
        return (
            <div className="container">
                {this.Campos(this.props.campos, this.props.descripcion)}
            </div>
        )
    }

}

export default Formulario;
