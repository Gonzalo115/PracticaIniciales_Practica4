import React, { Component } from 'react';
import '../App';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Cookies from 'universal-cookie';

const baseUrl = "http://localhost:3001/login";


class Login extends Component {
  state = {
    form: {
      carnet: '',
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

  login = async () => {
    try {
              
      //enviar al backend por axios al backend
      await axios.post(baseUrl, {
        carnet: this.state.form.carnet,
        password: this.state.form.contrasenia
      })
        .then(response => {
          if (response.data.body.res == true) {
            alert(`Bienvenido !`);
            window.location.href = "./Principal";
          } else {
            alert('No se ha podido iniciar sesion');
          }
        })
        .catch(error => {
          console.log(error);
        })

    } catch (error) {
      console.log(error);
    }
  }


    render() {



        const iniciarSesion = ()=>{
          this.login()
        }

        const registro=async()=>{
            window.location.href="./Registrarse";
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
                     name="carnet"
                     onChange={this.handleChange}
                    className="form-control" placeholder="Ingresar Carnet" aria-label="Username" aria-describedby="basic-addon1"/>
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
                <button class="btn btn-primary" type="button" onClick={iniciarSesion}>Inicar Sesion</button>
                <button class="btn btn-primary" type="button" onClick={registro}>Registrarse</button>
              </div>
                <a  href="./Consultar">Recuperar contraseña</a>
              </div>
            </div>
          </div>
        );
    }
}

export default Login;