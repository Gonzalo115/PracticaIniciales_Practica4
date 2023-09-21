import React, { Component } from 'react';
import axios from 'axios';
import '../App';
import '../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const baseUrl = "http://localhost:3001/perfiles";

class VerPerfiles extends Component {

    state = {
        form: {
          carnet: ''
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
    
    buscar_Usuario = async () => {

        try {
              
            //enviar al backend por axios al backend
            await axios.post(baseUrl, {
              carnet: this.state.form.carnet
            })
              .then(response => {
                console.log("respuesta"+response.data)
                if (response.data.return) {
                  var usuario = response.data.return
                  var carnet = usuario.carnet
                  var nombres = usuario.nombre
                  var apellidos = usuario.apellido
                  var correo = usuario.correo
                  window.location.href="http://localhost:3000/verPerfiles/?carnet="+carnet+"&correo="+correo+"&nombre="+nombres+"&apellidos="+apellidos;
                } else {
                  alert('No se ha podido encontrar ningun usuario');
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

        let contenido = null

        const urlParams = new URLSearchParams(window.location.search)
        const carnet = urlParams.get("carnet")
        const nombres = urlParams.get("nombre")
        const apellidos = urlParams.get('apellidos')
        const correo = urlParams.get("correo")

        if (carnet !="" && nombres !="" && apellidos != "" && correo !=""){
            contenido = (
                <div>
                    <h2>Perfil</h2>
                    <table class='table table-striped'>
                    <thead>
                        <tr>
                        <th>Carnet</th>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Correo Electrónico</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>{carnet}</td>
                        <td>{nombres}</td>
                        <td>{apellidos}</td>
                        <td>{correo}</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            )
        }else{
            contenido = (
                <div>
                    <p>SIN USUARIOS AUN</p>
                </div>
            )
        }

        return (
            <header>
                <section>
                    <div className='cote'>
                        <a href='http://localhost:3000/Principal'>Home</a>
                        <a href='http://localhost:3000/CrearPost'>Crear Post</a>
                        <a href='http://localhost:3000/VerPerfiles'>Ver Perfiles</a>
                        <a href='/'>Salir</a>
                    </div>
                </section>
                <section>
                    <div className='cuerpo'>
                        <center><h1>Ver Perfiles</h1></center>
                        <div className='input-group mb-3'>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Carnet: </span>
                                <input type="number" 
                                name="carnet"
                                onChange={this.handleChange}
                                className="form-control" placeholder="Ingresar Carnet" aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                        <button class="btn btn-primary" type="button" onClick={() => this.buscar_Usuario()}>BUSCAR</button>
                    </div>
                    <br></br>
                    <div class ="text-center">
                        {contenido}
                    </div>
                </section>
            </header>
                
                
        );
    }
}

export default VerPerfiles;