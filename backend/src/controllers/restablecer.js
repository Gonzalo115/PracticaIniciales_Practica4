const db = require('../db/conexion');
const config = require('../db/config')
const mysql = require('mysql2/promise')

exports.restablecer = async (req, res) => {

    try {
        
        // Crear una conexión que se cerrará automáticamente al terminar
        const connection = await mysql.createConnection(config.db);

        // Obtener los datos del body
        const { carnet, password } = req.body;

        // Insertar los datos en la tabla Usuario donde el carnet sea igual al carnet ingresado se debe sustituir la contraseña por la nueva
        await db.querywithoutclose(connection, `UPDATE BDPR4.USUARIO SET password = ? WHERE carnet = ?`, [password, carnet]);

        // Cierra la conexión
        await connection.end();

        res.status(200).json({
            body: { res: true, message: 'Actualizado con exito!' },
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            body: { res: false, message: 'Error: ', error },
        });
    }
}


