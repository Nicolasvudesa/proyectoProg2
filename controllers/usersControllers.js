const data = require("../data/data");

const controller = {
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
                
                return res.redirect('/products/all')

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