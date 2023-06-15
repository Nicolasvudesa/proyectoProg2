var express = require('express');
var router = express.Router();
const controller = require("../controllers/usersControllers")

/* requerir modulos de multer y path */
let multer = require('multer');
let path = require ('path');

/* Configurar multer */
let storage = multer.diskStorage({
    destination : function(req,file, cb) {
        cb(null, path.join(__dirname, '../public/images/fotosPerfil'))
    },
    filename : function(req,file, cb) {
        /* facu.png */
         /*    name campoDelForm   -    16062022        .png */
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});
let upload = multer({ storage : storage});

/* GET users listing. */
router.get('/login', controller.mostrarLogin)
router.post('/login', controller.login)
router.get('/logout', controller.logout); 
router.get('/registrate', controller.registro);
router.post('/registrate',upload.single('foto'),controller.guardarRegistro);

router.get('/profile/:id', controller.profile)

router.get('/profile-edit', controller.edit)

module.exports = router;

