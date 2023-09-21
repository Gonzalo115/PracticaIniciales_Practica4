const db = require('../db/conexion');
const config = require('../db/config')
const mysql = require('mysql2/promise')

exports.perfiles = async (req, res) => {

    try {
        
        // Crear una conexión que se cerrará automáticamente al terminar
        const connection = await mysql.createConnection(config.db);

        //consultar si existen los datos en la tabla Usuario por medio de carnet y password
        const { carnet } = req.body;
        console.log(carnet);

        const [rows] = await db.querywithoutclose(connection, `SELECT * FROM BDPR4.USUARIO WHERE carnet = ?`, [carnet]);        
        
        if (rows != null) {

            if (rows.carnet == carnet) {
                console.log(rows);
                res.status(200).json({
                    return: rows, // Los resultados de la consulta
                });
            }
        } else {
            res.status(200).json({
                body: { res: false, message: 'No se encuentra el usuario!' },
            });
        }
        // Cierra la conexión
        await connection.end();

    } catch (error) {
        console.log(error);
        res.status(500).json({
            body: { res: false, message: 'Error: ', error },
        });
    }
}