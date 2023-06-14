var express = require('express');
var router = express.Router();
const indexController = require("../controllers/indexControllers")
/* GET home page. */


router.get('/', indexController.index)

router.get('/id/:id', indexController.show)

router.get('/busqueda', indexController.resultado)

module.exports = router;
