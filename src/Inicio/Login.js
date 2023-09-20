import React, { Component } from 'react';
import '../App';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

class Login extends Component {

    render() {
        ///const [Carnet,setCarnet] = useState(0);
        ///const [contrasena, setContrasena] = useState("");
        /*

                            onChange={(event)=>{
                      setContrasena(event.target.value);
                    }}


                                        onChange={(event)=>{
                      setCarnet(event.target.value);
                    }}

        */


        const iniciarSesion = ()=>{
            window.location.href="http://localhost:3000/Principal";
        }

        const registro=async()=>{
            window.location.href="http://localhost:3000/Registrarse";
        }

        const cosultar = ()=>{
            ///alert(Carnet);
        }

        return (
            <div class="container">
            <div className="App">
            </div>
            <div class="card text-center">
              <div class="card-header">
                Inicio De Sesion
              </div>
              <div className="card-body">
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Carnet: </span>
                    <input type="number" 

                    className="form-control" placeholder="Ingresar Carnet" aria-label="Username" aria-describedby="basic-addon1"/>
                  </div>
                  
                  
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Contraseña:  </span>
                    <input type="password" 

                    className="form-control" placeholder="Ingrese La Contraseña" aria-label="Username" aria-describedby="basic-addon1"/>
                  </div>
              </div>
              <div class="card-footer text-muted">
              <div class="d-grid gap-2">
                <button class="btn btn-primary" type="button" onClick={iniciarSesion}>Inicar Sesion</button>
                <button class="btn btn-primary" type="button" onClick={registro}>Registrarse</button>
              </div>
                <a  href="http://localhost:3000/Consultar">Recuperar contraseña</a>
              </div>
            </div>
          </div>
        );
    }
}

export default Login;