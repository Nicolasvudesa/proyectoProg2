const express = require('express');
const router = express.Router();
const controller = require("../controllers/productosControllers")

router.get('/detalle/:id', controller.detalle);

router.get('/agregar', controller.agregarProducto);
router.post('/agregar',controller.guardarProducto);

router.get('/editar/:id',controller.editar); 
router.post('/editar/id/:id',controller.guardarEdit); 

router.get('/:search', controller.search)

router.post('/agregarComentario/:idProducto',controller.agregarComentario)

module.exports = router;
