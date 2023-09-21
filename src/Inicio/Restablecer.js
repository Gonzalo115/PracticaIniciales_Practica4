import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const baseUrl="http://0.0.0.0:3000/login";

class Restablecer extends Component {

  state={
    form:{
        contrasenia:''
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

  cambiar_Pass = async(e) => {

    const urlParams = new URLSearchParams(window.location.search);
    const carne = urlParams.get("carnet")

    await axios.post(baseUrl, {carnet: carne,
                            password: this.state.form.contrasenia})
    .then(response => {
      alert("Contraseña reestrablecida")
      window.location.href="/";
    })
    .catch(error => {
      console.log(error);
    })
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
            <div className="App">
            </div>
                <div class="card text-center">
                  <div class="card-header">
                    Restablecer Contraseña
                  </div>
                  <div className="card-body">
                      <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Contraseña:  </span>
                        <input type="password"
                        name = "contrasenia"
                        onChange = {this.handleChange}
                        className="form-control" placeholder="Ingresar la nueva Contraseña" aria-label="Username" aria-describedby="basic-addon1"/>
                      </div>
                  </div>
                  <div class="card-footer text-muted">
                  <div class="d-grid gap-2">
                    <button class="btn btn-primary" type="button" onClick={() => this.cambiar_Pass()}>Restablecer</button>
                  </div>
                  </div>
                </div>
              </div>
              </section>
          </header>



            
        );
    }
}

export default Restablecer;