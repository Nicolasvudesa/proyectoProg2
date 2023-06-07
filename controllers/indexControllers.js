const db = require('../database/models')
const Producto = db.Producto;

const indexController = {
    index: function(req,res){
        Producto.findAll()
        .then(function(result){

            return res.render("index",{
                productos: result, comentarios: result
            })
        })
        .catch(function(error){
            console.log(error)
        });
    }
}

module.exports = indexController;