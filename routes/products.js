const express = require('express');
const router = express.Router();
const controller = require("../controllers/productosControllers")

router.get('/all', controller.findAll)

router.get('/detalle/:id', controller.detalle);

router.get('/agregar', controller.agregarProducto);
router.post('/agregar', controller.guardarProducto);

router.get('/editar/:id',controller.editar); 
router.post('/editar/id/:id',controller.guardarEdit); 






router.get('/', controller.index)
router.get("/product")
router.get("/product-add", controller.add)

router.get('/search', controller.search)

module.exports = router;
/*
router.get('/create', controller.createForm);
router.post('/create', controller.save)
 */