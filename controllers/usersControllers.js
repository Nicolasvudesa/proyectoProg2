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
            usuarioLogueado: true
        });
    },
    edit:  function(req,res){
        res.render("profile-edit",{
            usuarioLogueado: false
        });
    }
}

module.exports = controller