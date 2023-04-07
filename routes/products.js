const express = require('express');
const router = express.Router();
const controller = require("../controllers/productosControllers")


router.get('/', controller.index)

module.exports = router;