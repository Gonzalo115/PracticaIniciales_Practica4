const express = require('express');
const router = express.Router();

const { registro } = require('../controllers/registro');
const { login } = require('../controllers/login');
const { confirmar } = require('../controllers/confirmar');
const { restablecer } = require('../controllers/restablecer');
const { perfiles } = require('../controllers/perfiles')

//peticon post
router.post('/login', login)
router.post('/confirmar', confirmar)
router.post('/restablecer', restablecer)
router.post('/registro', registro);
router.post('/perfiles', perfiles)

module.exports = router;
