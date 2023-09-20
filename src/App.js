import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Login from './Inicio/Login';
import Registrarse from './Inicio/Registrarse';
import Consultar from './Inicio/Consultar';
import Restablecer from './Inicio/Restablecer'
import Principal from './Inicio/Principal';
import CrearPost from './Inicio/CrearPost';
import VerPerfiles from './Inicio/VerPerfiles';



function App() {
  
  return (
    <Router>
      <Routes>
      <Route exact path='/' element={<Login/>}></Route>
      <Route exact path='/registrarse' element={<Registrarse/>}></Route>
      <Route exact path='/consultar' element={<Consultar/>}></Route>
      <Route exact path='/restablecer' element={<Restablecer/>}></Route>
      <Route exact path='/principal' element={<Principal/>}></Route>
      <Route exact path='/crearPost' element={<CrearPost/>}></Route>
      <Route exact path='/verPerfiles' element={<VerPerfiles/>}></Route>
      </Routes>
    </Router>
    
  );
}

export default App;
