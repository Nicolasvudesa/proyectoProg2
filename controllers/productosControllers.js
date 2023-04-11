const { usuario, comentarios } = require("../data/data");
const data = require("../data/data");

const controller = {
    index: function(req,res){
        res.render('product',{
            usuarioLogueado : true,
            usuario: data.usuario,
            comentarios: data.comentarios
        })
    
    },
    add:  function(req,res){
        res.render('product-add',{
            usuarioLogueado: true,
            usuario: data.usuario
        });
    
    
}
}

module.exports = controller