const express = require('express');
const router = express.Router();
const controller = require("../controllers/productosControllers")

router.get('/all', controller.findAll)

router.get('/id/:id', controller.detalle);

router.get('/agregar', controller.agregarForm);
router.post('/agregar', controller.guardarForm);

router.get('/editar/id/:id',controller.editar); 
router.post('/editar/id/:id',controller.guardarEdit); 







module.exports = router;
/*
router.get('/create', controller.createForm);
router.post('/create', controller.save)
 */