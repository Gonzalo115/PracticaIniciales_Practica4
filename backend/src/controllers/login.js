const db = require('../db/conexion');
const config = require('../db/config')
const mysql = require('mysql2/promise')

exports.login = async (req, res) => {

    try {
        
        // Crear una conexión que se cerrará automáticamente al terminar
        const connection = await mysql.createConnection(config.db);

        //consultar si existen los datos en la tabla Usuario por medio de carnet y password
        const { carnet, password } = req.body;
        console.log(carnet, password);

        const [rows] = await db.querywithoutclose(connection, `SELECT * FROM BDPR4.USUARIO WHERE carnet = ? AND password = ?`, [carnet, password]);        
        
        if (rows != null) {

            if (rows.carnet == carnet && rows.password == password) {
                console.log(rows);
                res.status(200).json({
                    body: { res: true, message: 'Ingresado con exito!' },
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


