import './App.css';
import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';


function Registrarse() {

  const [Carnet,setCarnet] = useState(0);
  const [contrasena, setContrasena] = useState("");

  const iniciarSesion = ()=>{
    alert(Carnet);
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
              <span className="input-group-text" id="basic-addon1">Carnet: </span>
              <input type="number" 
              onChange={(event)=>{
                setCarnet(event.target.value);
              }}
              className="form-control" placeholder="Ingresar Carnet" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            
            
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Contraseña:  </span>
              <input type="password" 
              onChange={(event)=>{
                setContrasena(event.target.value);
              }}
              className="form-control" placeholder="Ingrese La Contraseña" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
        </div>
        <div class="card-footer text-muted">
        <div class="d-grid gap-2">
          <button class="btn btn-primary" type="button" onClick={iniciarSesion}>Inicar Seccion</button>
        </div>
        </div>
      </div>
    </div>
    
  );
}

export default Registrarse;