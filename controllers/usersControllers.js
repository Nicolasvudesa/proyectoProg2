const db = require("../database/models");
const user = db.Usuario
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

        user.findOne(filtrado)
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
        registro : function(req, res) {
            res.render('register')
           
    
        },
        guardar : function(req, res) {
            
            let info = req.body;
        
            let userInfo = {
                nombre: info.usuario,
                email: info.mail,
                clave: bcrypt.hashSync(info.contra, 10),
                fotoPerfil: info.foto,
                fecha: info.edad,
                dni: info.dni,
            }
            
            user.create(userInfo)
            .then(function(result) {
    
                return res.redirect('/users/login')
                
            }).catch(function(error) {
    
                console.log(error);
                
            })
        },
    
        /* function(req, res){
            let form = req.body;
            let mailUsuario = form.mail
            let contraseña = form.contra
            let fechaNacimiento = form.edad
            let dni = form.dni
            let fotoDePerfil = form.foto
            let nombreUsuario = form.usuario
    
            let filtrado = {
                where: [{email: mailUsuario}]
            }
        
    
        db.Usuario.findOne(filtrado) 
        .then(function(result){
          
            
            let error = {};
            if (mailUsuario == '') {
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
    
    }, */
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