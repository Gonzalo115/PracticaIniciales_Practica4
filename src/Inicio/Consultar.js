import React, { Component } from 'react';
import '../App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

class Consultar extends Component {

    render() {



        const registro=async()=>{
            window.location.href="http://localhost:3000/Restablecer";
        }

        return (


            <header>
                <section>
                    <div className='cote'>
                        <a href='./'>Salir</a>
                    </div>
                </section>
                <section>
                    <div class="container">
                    <div className="App">
                        </div>
                        <div class="card text-center">
                        <div class="card-header">
                            Consultar
                        </div>
                        <div className="card-body">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Carnet: </span>
                                <input type="number" 

                                className="form-control" placeholder="Ingresar Carnet" aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                            
                            
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Correo Electronico:  </span>
                                <input type="text" 

                                className="form-control" placeholder="Ingrese el Correo Electronico" aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                        <div class="card-footer text-muted">
                            <div class="d-grid gap-2">
                                <button class="btn btn-primary" type="button" onClick={registro}>Verificar</button>
                            </div>
                        </div>
                    </div>
                    </div>
                </section>
            </header>



        );
    }
}

export default Consultar;