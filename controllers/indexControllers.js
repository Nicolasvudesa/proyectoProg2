const { usuario } = require("../data/data")
const data = require("../data/data")
const controller = {
    index: function(req,res){
        res.render("index",{
            productos: data.productos,
            usuarioLogueado: false,
            usuario: data.usuario
        })
    }
}

module.exports=controller