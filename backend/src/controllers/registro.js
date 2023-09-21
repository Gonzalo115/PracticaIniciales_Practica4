const db = require('../db/conexion');
const config = require('../db/config')
const mysql = require('mysql2/promise')

exports.registro = async (req, res) => {

    try {
        
        // Crear una conexión que se cerrará automáticamente al terminar
        const connection = await mysql.createConnection(config.db);

        // Obtener los datos del body
        const { carnet, nombre, apellido, correo, password } = req.body;
        

        // Insertar los datos en la tabla Usuario
        await db.querywithoutclose(connection, `INSERT INTO BDPR4.USUARIO (carnet, nombre, apellido, correo, password) VALUES (?, ?, ?, ?, ?)`, [carnet, nombre, apellido, correo, password]);
        
        // Cierra la conexión
        await connection.end();

        res.status(200).json({
            body: { res: true, message: 'Ingresado con exito!' },
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            body: { res: false, message: 'Error: ', error },
        });
    }
}


