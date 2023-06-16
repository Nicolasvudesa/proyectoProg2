var express = require('express');
var router = express.Router();
const controller = require("../controllers/usersControllers")

router.get('/registrate', controller.mostrarRegistro);
router.post('/registrate',controller.guardarRegistro);

router.get('/login', controller.mostrarLogin)
router.post('/login', controller.accionLogin)

router.get('/logout', controller.logout); 

router.get('/profile/:id', controller.profile)

router.get('/searchUsuario' , controller.buscar)

router.get('/search' , controller.search)

module.exports = router;

