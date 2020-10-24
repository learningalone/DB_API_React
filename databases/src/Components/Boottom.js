import React from 'react'
import { Link } from 'react-router-dom'
import './Boottom.css'

class Boottom extends React.Component {

    render(){
        return (
        <Link className="MyButtom" to={this.props.link}>
            {this.props.contenido}
        </Link>)
    }

}

export default Boottom;