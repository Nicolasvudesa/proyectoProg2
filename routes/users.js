var express = require('express');
var router = express.Router();
const controller = require("../controllers/usersControllers")

/* GET users listing. */
router.get('/login', controller.mostrarLogin)
router.post('/login', controller.login)
router.get('/logout', controller.logout); 
router.get('/registrate', controller.registro);
router.post('/registrate', controller.guardar);




router.get('/profile', controller.profile)

router.get('/profile-edit', controller.edit)

module.exports = router;

