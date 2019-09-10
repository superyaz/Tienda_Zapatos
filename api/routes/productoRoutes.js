const express = require('express');
const productoController = require('./../controller/productoController');
const router = express.Router();


router.get('/producto', productoController.index);
router.post('/producto', productoController.guardar);
router.get('/producto/:id', productoController.ver);
router.put('/producto/:id', productoController.modificar);
router.delete('/producto/:id/:estado', productoController.eliminar);

module.exports = router;