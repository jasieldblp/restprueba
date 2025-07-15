const express = require('express');
const router = express.Router();
const joyasController = require('../controllers/joyasController');

router.get('/',joyasController.buscarTodo)
    .post('/',joyasController.agregarJoya)
    .get('/:key/:value',joyasController.buscarjoyas,joyasController.mostrarjoyas)
module.exports=router