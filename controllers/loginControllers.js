let db = ('../database/models');
const bcrypt = require('bcryptjs');

let loginController = {
    mostrarLogin: function (req, res) {
        res.render('login');
    },
    login: function (req, res) {
        let form = req.body
        let usuario = form.usuario
        let contraseña = form.contra
        let filtrado = {
            where: [{ usuario: usuario }]
        }

        db.Usuario.findOne(filtrado)
        .then(function (result) {
            let error = {};
            if (email == '') {
                error.message = "El mail está vacío."
                res.locals.error = error;
                return res.render('login')
            }
            if (result == null) {
                error.message = "Email no encontrado"
                res.locals.error = error;
                return res.render('login')
            }
            if (contra == '') {
                error.message = "Contraseña es un campo obligatorio"
                res.locals.error = error;
                return res.render('login')
            }
        
            let contraseñaEncriptada = result.contraseña
            let check = bcrypt.compareSync(contraseña, contraseñaEncriptada)

            if  (check == true) {

                req.session.user = result

                if (req.body.recordame != undefined) {
                    res.cookie('userId', result.id, { maxAge: 1000 * 60 * 15000 });
                }
                
                return res.redirect('/')

            } else {
                error.message = "Contraseña incorrecta."
                res.locals.error = error;
                return res.render('login')
            }

        })
        .catch(function (error) {
            console.log(error);
        })

},
        logout: function (req, res) {
            
            req.session.destroy();
            res.clearCookie('userId')
            return res.redirect('/');
        }
}
module.exports = loginController
