import React, { Component } from 'react';
import '../App';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Cookies from 'universal-cookie';
const baseUrl = "http://0.0.0.0:8000/registro";
const cookies = new Cookies();


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
    await axios.post(baseUrl, { correo: this.state.form.correo, 
                                carnet: this.state.form.carnet,
                                nombre: this.state.form.nombre,
                                apellido: this.state.form.apellido, 
                                password: this.state.form.contrasenia })
      .then(response => {
        if (response.data != null) {
          var respuesta = response.data; // Cambio de response[0] a response.data
          cookies.set('correo', respuesta.usuario, { path: "/" });
          cookies.set('carnet', respuesta.usuario, { path: "/" });
          cookies.set('nombre', respuesta.usuario, { path: "/" });
          cookies.set('apellido', respuesta.usuario, { path: "/" });
          cookies.set('contrasenia', respuesta.contrasenia, { path: "/" });

          alert(`Registrado ${respuesta.carnet}`);
          window.location.href = "./";
        } else {
          alert('No se ha podido registrar');
        }
      })
      .catch(error => {
        console.log(error);
      })
  }

  componentDidMount() {
    if (cookies.get('carnet')) {
      window.location.href = "./carnet";
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
                            className="form-control" placeholder="Ingrese Correo Electronico" aria-label="Ingrese Correo Electronico" aria-describedby="basic-addon1"/>
                          </div>
                          <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Carnet: </span>
                            <input type="number" 
                                  name="carnet"
                                  onChange={this.handleChange}
                            className="form-control" placeholder="Ingresar Carnet" aria-label="Username" aria-describedby="basic-addon1"/>
                          </div>
                          <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Nombres: </span>
                            <input type="text" 
                                name="nombre"
                                onChange={this.handleChange}
                            className="form-control" placeholder="Ingrese su Nombres" aria-label="Username" aria-describedby="basic-addon1"/>
                          </div>
                          <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Apellidos: </span>
                            <input type="text" 
                                  name="apellido"
                                  onChange={this.handleChange}
                            className="form-control" placeholder="Ingrese su Apellidos" aria-label="Username" aria-describedby="basic-addon1"/>
                          </div>
                                  
                          <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Contraseña:  </span>
                            <input type="password" 
                                    name="contrasenia"
                                    onChange={this.handleChange}
                            className="form-control" placeholder="Ingrese La Contraseña" aria-label="Username" aria-describedby="basic-addon1"/>
                          </div>
                      </div>
                      <div class="card-footer text-muted">
                      <div class="d-grid gap-2">
                        <button class="btn btn-primary" type="button" onClick={() => this.registrarse()}>Registrarse</button>
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