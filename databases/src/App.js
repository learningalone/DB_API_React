import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Insertar from './Pages/Insertar'
import Consultar from './Pages/Consultar'
import Eliminar from './Pages/Eliminar'
import Actualizar from './Pages/Actualizar'
import NotFound from './Pages/NotFound'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/insertar" component={Insertar}/>
          <Route path="/actualizar" component={Actualizar}/>
          <Route path="/eliminar" component={Eliminar}/>
          <Route path="/consultar" component={Consultar}/>
          <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>

      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
