const { usuario, comentarios } = require("../data/data");
const data = require("../data/data");
const db = require('../database/models')
const products = db.Producto; //Alias del modelo

const controller = {
    index: function(req,res){
        res.render('product',{
            usuarioLogueado : false,
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