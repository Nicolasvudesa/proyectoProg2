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
    
    show: function(req, res){
        let id = req.params.id; 
    
        modeloProducto.findByPk(id)
        .then(function(result) {
          return res.render('product', {
            productos: result
          })
        })
        .catch(function(error) {
          console.log(error);
        });
    
      },
    
    resultado: function(req, res) {
        let busqueda = req.query.product;
    
        modeloProducto.findAll(
          {
            where: [
              /* { title: busqueda} */
             /*  {title: {[op.like]: `%${busqueda}%`}} */
             {title: {[op.like]: '%' + busqueda + '%'}}
            ]
          }
        ).then(function(result) {
          return res.render('search-results', {/*lo que recibe la busqueda!! : result*/})
        })
        .catch(function (error) {
          console.log(error);
        });
        },
    }
module.exports = indexController;


