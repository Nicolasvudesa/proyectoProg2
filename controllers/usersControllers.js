const data = require("../data/data");

const controller = {
    login: function(req,res){
        res.render("login",{
            usuarioLogueado: false
        });

    },
    register :  function(req,res){
        res.render("register",{
            usuarioLogueado: false
        });
    },
    profile:  function(req,res){
        res.render("profile",{
            usuarioLogueado: true,
            usuario: data.usuario
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