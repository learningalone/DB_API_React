import React from 'react'
import Boottom from '../Components/Boottom'

const NotFound = () => {
    return (
        <div>
            <Boottom link="/insertar" contenido="INSERTAR"/>
            <Boottom link="/actualizar" contenido="ACTUALIZAR"/>
            <Boottom link="/eliminar" contenido="ELIMINAR"/>
            <Boottom link="/consultar" contenido="CONSULTAR"/>
            <h1>NotFound</h1>
        </div>
    )
}

export default NotFound;