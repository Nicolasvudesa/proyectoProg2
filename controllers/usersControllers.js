const db = require("../database/models");
const user = db.Usuario
const bcrypt = require('bcryptjs');

const controller = {
    mostrarLogin: function (req, res) {
        res.render('login');
    },
    login: function (req, res) {
        let emailBuscado = req.body.usuario
        let contraseña = req.body.contra
        let filtrado = {
            where: [{ usuario: emailBuscado }]
        }

        user.findOne(filtrado)
        .then((result) => {
          
            if (result != null) {
                      let claveCorrecta = bcrypt.compareSync(contraseña, result.contra)
                      if (claveCorrecta) {
                          req.session.user = result.dataValues;
                          return res.redirect('/all');
  
                      } else {
                          return res.send("La contraseña ingresada es incorrecta");
                      }
                  } else {
                      return res.send("Este mail es inexistente")
                  }
  
              }).catch((err) => {
                  console.log(err);
              });

},
        logout: function (req, res) {
            
            req.session.destroy();
            res.clearCookie('userId')
            return res.redirect('/users/login');
        },
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
    profile:  function(req,res){
        res.render("profile",{
            usuarioLogueado: true,
            usuario: data.usuario,
            productos: data.productos,
        });
    },
    edit:  function(req,res){
        res.render("profile-edit",{
            usuarioLogueado: true,
            usuario: data.usuario
        });
    }
}

module.exports = controller