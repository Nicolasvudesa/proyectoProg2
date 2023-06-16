const db = require('../database/models')
const modeloProducto = db.Producto;

const indexController = {

  index: function(req,res){

    modeloProducto.findAll({

      include: [{association: 'usuarios'}],
      limit: 16,
      order: [['createdAT', 'DESC']]
      
    })

    .then(function(result){
      return res.render("index",{productos: result})
    })

    .catch(function(error){
        console.log(error)
    });
  },
    
}
  
module.exports = indexController;


