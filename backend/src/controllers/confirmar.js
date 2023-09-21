const db = require('../db/conexion');
const config = require('../db/config')
const mysql = require('mysql2/promise')

exports.confirmar = async (req, res) => {

    try {
        
        // Crear una conexión que se cerrará automáticamente al terminar
        const connection = await mysql.createConnection(config.db);

        //consultar si existen los datos en la tabla Usuario por medio de carnet y password
        const { carnet, correo } = req.body;
        console.log(carnet, correo);

        const [rows] = await db.querywithoutclose(connection, `SELECT * FROM BDPR4.USUARIO WHERE carnet = ? AND correo = ?`, [carnet, correo]);        
        
        if (rows != null) {

            if (rows.carnet == carnet && rows.correo == correo) {
                console.log(rows);
                res.status(200).json({
                    body: { res: true, message: 'Datos encontrados' },
                });
            }
        } else {
            res.status(200).json({
                body: { res: false, message: 'Datos no encontrados!' },
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


