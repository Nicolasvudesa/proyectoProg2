const express = require('express');
const router = express.Router();
let registroController = require("../controllers/registerControllers")

router.get('/', registroController.registro);
router.post('/guardar', registroController.guardar);


module.exports = router;

