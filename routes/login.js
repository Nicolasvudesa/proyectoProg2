const express = require('express');
const router = express.Router();
let loginController = require("../controllers/loginControllers")

router.get('/', loginController.mostrarLogin);
router.post('/loginUsuario', loginController.login);
router.get('/logout', loginController.logout);

module.exports = router;