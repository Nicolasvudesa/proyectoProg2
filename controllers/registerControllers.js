let db = require('../database/models');
let bcrypt = require('bcryptjs');

let registroController = {
    registro : function(req, res) {
        res.render('register', {
            email: req.params.email
        })
        console.log(email);

    },
    guardar : function(req, res){
        let form = req.body;
        let nombreUsuario = form.usuario
        let contraseña = form.contra
        let fechaNacimiento = form.edad
        let dni = form.dni
        let fotoDePerfil = form.foto
        let nombre = form.usuario

        let filtrado = {
            where: [{email: email}]
        }
    

    db.Usuario.findOne(filtrado) 
    .then(function(result){
      
        
        let error = {};
        if (email == '') {
            error.message = "Ingrese un mail."
            res.locals.error = error;
            return res.render('register')
        }
        if (result != null) {
            error.message = "Ingrese otro mail."
            res.locals.error = error;
            return res.render('register')
        }
        if (nombreUsuario == '') {
            error.message = "Ingrese un nombre de usuario."
            res.locals.error = error;
            return res.render('register')
        }
        if (contraseña.length < 3) {
            error.message = "La contraseña debe tener como minimo 3 caracteres."
            res.locals.error = error;
            return res.render('register')
        }
        
        db.Usuario.create({
            email:email,
            contraseña: bcrypt.hashSync(contraseña, 12),
            fotoPerfil: fotoDePerfil,
            dni: dni,
            nombre:nombre
        })

        return res.redirect('/login')
        
      })
      .catch( function(error){
          console.log(error);
      })

}, 
}

module.exports = registroController;