const controller = {
    login: function(req,res){
        res.send("aqui vamos a mandar el login")
    },
    register :  function(req,res){
        res.send("aqui vamos a mandar el register")
    },
    profile:  function(req,res){
        res.send("aqui vamos a mandar el profile")
    },
    edit:  function(req,res){
        res.send("aqui vamos a mandar el edit")
    }
}

module.exports = controller