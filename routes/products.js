const express = require('express');
const router = express.Router();
const controller = require("../controllers/productosControllers")


router.get('/', controller.index)
router.get("/product")
router.get("/product-add", controller.add)

module.exports = router;
/*
router.get('/create', controller.createForm);
router.post('/create', controller.save)
 */