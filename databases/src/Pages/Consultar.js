import React from 'react'
//import Formulario from '../Components/Formulario'
import Boottom from '../Components/Boottom'
import Loading from '../Components/Loading'
import './pages.css'

class Consultar extends React.Component {
    constructor(props){
        super(props)

        this.state={
            formulario: (
                <div className="container">
                <form onSubmit={this.handleSubmit}className="contact" method="get">
                    <h3>Taller Base de datos</h3>
                    <h3>UNIVALLE</h3>
                    <h4>Consultar Pacientes</h4>
                    <fieldset>
                        <button name="submit" type="submit" id="putForm-submit" data-submit="...Sending">Consultar</button>
                    </fieldset>
                </form>
                </div>
            ),
            tabla:(``),
            ready: true
        }
    }

    /* async componentDidMount(){
        await this.fetchPacientes()
    } */
    
    pintarTabla(data){
        if(data.length === 0){
            return (``)
        } else {
            return (
                <table>
                    <thead>
                        <tr >
                            <th >Nombre</th>
                            <th >Apellido</th>
                            <th >Identificacion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((paciente) => {
                            return (
                                <tr key={paciente.id.toString()}>
                                    <td >{paciente.nombre}</td>
                                    <td >{paciente.apellido}</td>
                                    <td >{paciente.numid}</td>                                            
                                </tr>)
                        })}
                    </tbody>
                </table>
            );
        } 
    }

    handleSubmit = async e => {
        e.preventDefault();
        try {
            this.setState({ready:false})
            let res = await fetch('http://localhost:7000/api/consultar');
            let data = await res.json(); 

            this.setState({
                //data:data,
                formulario:(``),
                tabla: this.pintarTabla(data),
                ready:true
            })
        } catch (error) {
            
        }
    }

    render(){
        if(this.state.ready){
            return (
                <React.Fragment>
                    <nav>
                        <Boottom link="/insertar" contenido="INSERTAR"/>
                        <Boottom link="/actualizar" contenido="ACTUALIZAR"/>
                        <Boottom link="/eliminar" contenido="ELIMINAR"/>
                    </nav>
                    {this.state.formulario}
                    {this.state.tabla}
    
                </React.Fragment>
            )
        }else return (<Loading/>)
    }
}

export default Consultar;