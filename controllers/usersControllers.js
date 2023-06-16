const db = require("../database/models");
const modeloUsuario = db.Usuario
const bcrypt = require('bcryptjs');
let op = db.Sequelize.Op

const controller = {

    mostrarLogin: function (req, res) {
        res.render('login')
    },

    login: function (req, res) {
        let emailBuscado = req.body.email
        let contra = req.body.clave
        let filtrado = {
            where: [{ email: emailBuscado }]
        };

        modeloUsuario.findOne(filtrado)
        .then((result) => {
            let errores = {}
            if (result != null) {
                      let claveCorrecta = bcrypt.compareSync(contra, result.clave)
                      if (claveCorrecta) {
                          req.session.user = result.dataValues;
                          return res.redirect('/');
  
                        } else{
                            errores.message = "Contraseña incorrecta"
                            res.locals.errores = errores
                            return res.render('login')
                        }
                        }else{
                            errores.message = "Mail inexistente"
                            res.locals.errores = errores
                        return res.render('login')
                    }
  
              })
              .catch((err) => {
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
        let info = req.body;
        let errors = {}
        if(req.body.mail=="" && req.body.usuario=="" && req.body.contra=="" && req.body.dni==""){
            errors.message = "Complete todos los campos"
            res.locals.errors = errors
            return res.render("register")
        }
        else if(req.body.mail==""){
            errors.message = "Ingrese un email"
            res.locals.errors = errors
            return res.render("register")
        }
        else if(req.body.usuario==""){
            errors.message = "Ingrese un usuario"
            res.locals.errors = errors
            return res.render("register")
        }
        else if(req.body.contra==""){
            errors.message = "Ingrese una contraseña"
            res.locals.errors = errors
            return res.render("register")
        }
        else if(req.body.edad=""){
            errors.message = "Ingrese su fecha de nacimiento"
            res.locals.errors = errors
            return res.render("register")
        }
        else if(req.body.dni==""){
            errors.message = "Ingrese su DNI"
            res.locals.errors = errors
            return res.render("register")
        }
        
        else if(req.body.contra.length<3){
            errors.message = "La contraseña debe tener al menos tres caracteres"
            res.locals.errors = errors
            return res.render("register")
        }
        else if(req.body.contra){
            let mailRepetido= {where:[{email: {[op.like]:req.body.mail}}]}
            db.Usuario.findOne(mailRepetido)
            .then(function(mailRepetido){
                if (mailRepetido != undefined){
                    errors.message = "El email ingresado ya esta registrado";
                    res.locals.errors = errors
                    return res.render('register')}
                else{

        let infoRegistro = {
          /*  fotoPerfil: req.file.filename, */
            nombre: req.body.usuario,
            email: req.body.mail,
            clave: bcrypt.hashSync(req.body.contra, 10),
            fecha: req.body.edad,
            dni: req.body.dni,
            }
         
        modeloUsuario.create(infoRegistro)
                
            .then(function(result) {
            return res.redirect('/users/login')
                
            }).catch(function(error) {
            console.log(error); 
            })
                    }
                })
            }},
    
    
    profile:  function(req,res){

        modeloUsuario.findByPk(req.params.id,  

            {include: [{ association: "productos", 
                         include:[{association: "comentarios"}]}], 

            order: [['productos','createdAt', 'DESC']]})

            .then(function (result) {
                console.log(result.productos)
                return res.render("profile", {usuario: result});
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