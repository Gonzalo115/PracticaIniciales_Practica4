import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

class Restablecer extends Component {

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


        const registro=async()=>{
            window.location.href="http://localhost:3000/Registrarse";
        }

        return (
            <div class="container">
            <div className="App">
            </div>
            <div class="card text-center">
              <div class="card-header">
                Inicio De Seccion
              </div>
              <div className="card-body">
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Contraseña:  </span>
                    <input type="password" 
                    className="form-control" placeholder="Ingresar la nueva Contraseña" aria-label="Username" aria-describedby="basic-addon1"/>
                  </div>
              </div>
              <div class="card-footer text-muted">
              <div class="d-grid gap-2">
                <button class="btn btn-primary" type="button" >Restablecer</button>
              </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Restablecer;