import React from 'react'
import Loading from '../Components/Loading'
import Boottom from '../Components/Boottom'
import './pages.css'

class Eliminar extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            ready:true
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    handleSubmit = async e => {
        e.preventDefault()
        try {
            this.setState({ready:false})
            let config = {
                method:'DELETE',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(this.state)
            }
            //console.log(config.body)
            let res = await fetch('http://localhost:7000/api/eliminar', config)
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
                        <Boottom link="/insertar" contenido="INSERTAR"/>
                        <Boottom link="/actualizar" contenido="ACTUALIZAR"/>
                        <Boottom link="/consultar" contenido="CONSULTAR"/>
                    </nav>
                    <div className="container">
                    <form className="contact" onSubmit={this.handleSubmit} method="delete">
                        <h3>Taller Base de datos</h3>
                        <h3>UNIVALLE</h3>
                        <h4>Eliminar Paciente</h4>
                        <fieldset>
                            <input placeholder="Id Paciente" name="numid" type="text" tabIndex="2" required onChange={this.handleChange}/>
                        </fieldset>
                        <fieldset>
                            <button name="submit" type="submit" id="putForm-submit" data-submit="...Sending">Eliminar</button>
                        </fieldset>
                    </form>
                    </div>
                </React.Fragment>
            )
        }else return(<Loading/>)
    }
}

export default Eliminar;