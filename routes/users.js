var express = require('express');
var router = express.Router();
const controller = require("../controllers/usersControllers")

/* GET users listing. */
router.get('/login', controller.login)

router.get('/register', controller.register )

router.get('/profile', controller.profile)

router.get('/profile-edit', controller.edit)

module.exports = router;

