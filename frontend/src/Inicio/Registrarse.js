import React, { Component } from 'react';
import '../App';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
const baseUrl = "http://localhost:3001/registro";

class Registrarse extends Component {
  state = {
    form: {
      correo: '',
      carnet: '',
      nombre: '',
      apellido: '',
      contrasenia: ''
    }
  }

  handleChange = async e => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  }

  registrarse = async () => {
    var correo = this.state.form.correo
    var carnet = this.state.form.carnet
    var nombre = this.state.form.nombre
    var apellido = this.state.form.apellido
    var password = this.state.form.contrasenia

    if (correo != "" && carnet != 0 && nombre != "" && apellido != "" && password != ""){
      await axios.post(baseUrl, { correo: correo, 
                                  carnet: carnet,
                                  nombre: nombre,
                                  apellido: apellido, 
                                  password: password })
      .then(response => {
        if (response.data != null) {
        alert('REGISTRADO EXITOSAMENTE');
        window.location.href = "/";
      } else {
        alert('No se ha podido registrar');
      }
      })
      .catch(error => {
        console.log(error);
      })
    }else{
      alert("FALTAN PARAMETROS")
    }    
  } 

    render() {

        return (

          <header>
                <section>
                    <div className='cote'>
                        <a href='./'>Cancelar</a>
                    </div>
                </section>
                <section>
                  <div class="container">
                  <div class="card text-center">
                    <div class="card-header">
                      Registrarse
                    </div>
                      <div className="card-body">

                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Correo Electronico: </span>
                            <input type="mail" 
                                  name="correo"
                                  onChange={this.handleChange}
                            className="form-control" placeholder="Ingrese Correo Electronico" aria-label="Ingrese Correo Electronico" aria-describedby="basic-addon1" required/>
                          </div>
                          <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Carnet: </span>
                            <input type="number" 
                                  name="carnet"
                                  onChange={this.handleChange}
                            className="form-control" placeholder="Ingresar Carnet" aria-label="Username" aria-describedby="basic-addon1" required/>
                          </div>
                          <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Nombres: </span>
                            <input type="text" 
                                name="nombre"
                                onChange={this.handleChange}
                            className="form-control" placeholder="Ingrese su Nombres" aria-label="Username" aria-describedby="basic-addon1" required/>
                          </div>
                          <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Apellidos: </span>
                            <input type="text" 
                                  name="apellido"
                                  onChange={this.handleChange}
                            className="form-control" placeholder="Ingrese su Apellidos" aria-label="Username" aria-describedby="basic-addon1" required/>
                          </div>
                                  
                          <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Contraseña:  </span>
                            <input type="password" 
                                    name="contrasenia"
                                    onChange={this.handleChange}
                            className="form-control" placeholder="Ingrese La Contraseña" aria-label="Username" aria-describedby="basic-addon1" required/>
                          </div>
                      </div>
                      <div class="card-footer text-muted">
                      <div class="d-grid gap-2">
                        <button class="btn btn-primary" type="button"  onClick={() => this.registrarse()}>Registrarse</button>
                      </div>
                      </div>
                    </div>
                  </div>
                </section>
            </header>
        );
    }
}

export default Registrarse;