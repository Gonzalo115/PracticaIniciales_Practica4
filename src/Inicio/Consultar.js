import React, { Component } from 'react';
import '../App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

class Consultar extends Component {


    state={
        form:{
            carnet: '',
            correo: ''
        }
      }
    
      handleChange=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
      }

      get_Data=async() => {
        var carne = this.state.form.carnet
        var corre= this.state.form.correo
        /*
        await axios.get(baseUrl, {
            carnet: carne,
            correo: correo
        })
        .then(response => {
            alert("Cuenta encontrada!")
            window.location.href="http://localhost:3000/Restablecer";
        })
        .catch(error => {
            alert("Error")
        })
        */
        window.location.href="http://localhost:3000/Restablecer";
      }


    

    render() {



        const verificar=async()=>{
            //window.location.href="http://localhost:3000/Restablecer";
            this.get_Data()
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
                                name = "carnet"
                                onChange={this.handleChange}
                                className="form-control" placeholder="Ingresar Carnet" aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                            
                            
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Correo Electronico:  </span>
                                <input type="email" 
                                name = "correo"
                                onChange={this.handleChange}
                                className="form-control" placeholder="Ingrese el Correo Electronico" aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                        <div class="card-footer text-muted">
                            <div class="d-grid gap-2">
                                <button class="btn btn-primary" type="button" onClick={verificar}>Verificar</button>
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