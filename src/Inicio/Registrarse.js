import React, { Component } from 'react';
import '../App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

class Registrarse extends Component {

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
            //alert(Carnet);
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
                Registrarse
              </div>
              <div className="card-body">

                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Correo Electronico: </span>
                    <input type="mail" 

                    className="form-control" placeholder="Ingrese Correo Electronico" aria-label="Ingrese Correo Electronico" aria-describedby="basic-addon1"/>
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Carnet: </span>
                    <input type="number" 

                    className="form-control" placeholder="Ingresar Carnet" aria-label="Username" aria-describedby="basic-addon1"/>
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Nombres: </span>
                    <input type="text" 

                    className="form-control" placeholder="Ingrese su Nombres" aria-label="Username" aria-describedby="basic-addon1"/>
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Apellidos: </span>
                    <input type="text" 

                    className="form-control" placeholder="Ingrese su Apellidos" aria-label="Username" aria-describedby="basic-addon1"/>
                  </div>
                  
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Contraseña:  </span>
                    <input type="password" 

                    className="form-control" placeholder="Ingrese La Contraseña" aria-label="Username" aria-describedby="basic-addon1"/>
                  </div>
              </div>
              <div class="card-footer text-muted">
              <div class="d-grid gap-2">
                <button class="btn btn-primary" type="button" onClick={iniciarSesion}>Registrarse</button>
              </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Registrarse;