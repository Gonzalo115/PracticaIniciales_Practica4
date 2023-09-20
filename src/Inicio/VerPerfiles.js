import React, { Component } from 'react';
import '../App';
import '../App.css';

class VerPerfiles extends Component {

    render() {
        return (
            <header>
                <section>
                    <div className='cote'>
                        <a href='http://localhost:3000/Principal'>Home</a>
                        <a href='http://localhost:3000/CrearPost'>Crear Post</a>
                        <a href='http://localhost:3000/VerPerfiles'>Ver Perfiles</a>
                        <a href='./'>Salir</a>
                    </div>
                </section>
                <section>
                    <div className='cuerpo'>
                        <center><h1>Ver Perfiles</h1></center>
                    </div>
                </section>
            </header>
                
                
        );
    }
}

export default VerPerfiles;