const express = require('express');
const router = express.Router();
const controller = require("../controllers/productosControllers")

/* requerir modulos de multer y path */
let multer = require('multer');
let path = require ('path');

/* Configurar multer */
let storage = multer.diskStorage({
    destination : function(req,file, cb) {
        cb(null, path.join(__dirname, '../public/images/productos'))
    },
    filename : function(req,file, cb) {
        /* facu.png */
         /*    name campoDelForm   -    16062022        .png */
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});
let upload = multer({ storage : storage});

router.get('/all', controller.findAll)

router.get('/detalle/:id', controller.detalle);

router.get('/agregar', controller.agregarProducto);
router.post('/agregar',upload.single('foto'),controller.guardarProducto);

router.get('/editar/:id',controller.editar); 
router.post('/editar/id/:id',controller.guardarEdit); 

router.get('/', controller.index)
router.get('/product')
router.get('/product-add', controller.add)

router.get('/search', controller.search)

router.get('/id/:id', controller.detalle);

module.exports = router;
/*
router.get('/create', controller.createForm);
router.post('/create', controller.save)
 */