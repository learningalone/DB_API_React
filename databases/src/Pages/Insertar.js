import React from 'react'
import Boottom from '../Components/Boottom'
import Loading from '../Components/Loading'
import './pages.css'

class Insertar extends React.Component {

    constructor(props){
        super(props)
        this.state={
            ready:true
        }
    }


    handleChange = e => {
        // let parcialState= {}
        // parcialState[e.target.name] = e.target.value;
        // this.setState(parcialState);
        this.setState({
            [e.target.name]: e.target.value 
        })
        //console.log(this.state)
    }

    handleSubmit = async e => {
        e.preventDefault()
        try {
            this.setState({ready:false})
            let config = {
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(this.state)
            }
            //console.log(config.body)
            let res = await fetch('http://localhost:7000/api/insertar', config)
            let json = await res.json()

            console.log(json)
            this.setState({ready:true})
        } catch (error) {
            
        }
        //console.log(this.state)
    }

    render(){
        if(this.state.ready){
            return (
                <React.Fragment>
                    <nav>
                        <Boottom link="/actualizar" contenido="ACTUALIZAR"/>
                        <Boottom link="/eliminar" contenido="ELIMINAR"/>
                        <Boottom link="/consultar" contenido="CONSULTAR"/>
                    </nav>
                    <div className="container">
                    <form className="contact" onSubmit={this.handleSubmit} method="post">
                        <h3>Taller Base de datos</h3>
                        <h3>UNIVALLE</h3>
                        <h4>Insertar Paciente</h4>
                        <fieldset>
                            <input placeholder="Nombre Paciente" name="nombre" type="text" tabIndex="1" requred="true" autoFocus onChange={this.handleChange}/>
                        </fieldset>
                        <fieldset>
                            <input placeholder="Apellido Paciente" name="apellido" type="text" tabIndex="1" required="ture" autoFocus onChange={this.handleChange}/>
                        </fieldset>
                        <fieldset>
                            <input placeholder="Id Paciente" name="numid" type="text" tabIndex="2" required onChange={this.handleChange}/>
                        </fieldset>
                        <fieldset>
                            <button name="submit" type="submit" id="putForm-submit" data-submit="...Sending">Enviar</button>
                        </fieldset>
                    </form>
                    </div>
                </React.Fragment>
            )
        }else return (<Loading/>)
        
    }
}

export default Insertar;