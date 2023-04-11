const express = require('express');
const router = express.Router();
const controller = require("../controllers/productosControllers")


router.get('/', controller.index)
router.get("/products")
router.get("/product-add", controller.add)
module.exports = router;