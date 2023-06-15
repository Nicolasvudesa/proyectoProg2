const db = require("../database/models");
const modeloUsuario = db.Usuario
const bcrypt = require('bcryptjs');

const controller = {

    mostrarLogin: function (req, res) {
        res.render('login');
    },
    login: function (req, res) {
        let emailBuscado = req.body.email
        let contra = req.body.clave
        let filtrado = {
            where: [{ email: emailBuscado }]
        };

        modeloUsuario.findOne(filtrado)
        .then((result) => {
          
            if (result != null) {
                      let claveCorrecta = bcrypt.compareSync(contra, result.clave)
                      if (claveCorrecta) {
                          req.session.user = result.dataValues;
                          return res.redirect('/');
  
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
        registro: function(req, res) {
            res.render('register')
           
    
        },
    guardarRegistro: function(req, res) {
        
        let infoRegistro = {
            fotoPerfil: req.file.filename,
            nombre: req.body.usuario,
            email: req.body.mail,
            clave: bcrypt.hashSync(req.body.contra, 10),
            fecha: req.body.edad,
            dni: req.body.dni,
            }
            /*let filtrado = {
                where: [{email: mail}]
            }
            modeloUsuario.findOne(filtrado) 
                .then(function(result){
                    
                    let errors = {};
                    if (email == '') {
                        errors.message = "El mail está vacío."
                        res.locals.errors = errors;
                        return res.render('register')
                    }
                    if (result != null) {
                        errors.message = "Email ya utilizado."
                        res.locals.errors = errors;
                        return res.render('register')
                    }
                    if (nombre == '') {
                        errors.message = "Username es un campo obligatorio."
                        res.locals.errors = errors;
                        return res.render('register')
                    }
                    if (clave.length < 3) {
                        errors.message = "La contraseña debe tener más de 3 caracteres."
                        res.locals.errors = errors;
                        return res.render('register')
                    }
                })*/
        modeloUsuario.create(infoRegistro)
                
            .then(function(result) {
            return res.redirect('/users/login')
                
            }).catch(function(error) {
            console.log(error); 
            })
        },
    
    profile:  function(req,res){

        modeloUsuario.findByPk(req.params.id,  
            {include: [{ association: "productos", 
                  include:[{association: "comentarios"}]}]})

            .then(function (result) {
                return res.render("profile", {usuario: result, usuarioLogueado: true});
              })
    
            .catch(function (error) {
                console.log(error);
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