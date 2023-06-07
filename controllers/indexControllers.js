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
    },
    show: (req, res) => {
        let id = req.params.id; 
    
        Producto.findByPk(id)
        .then(function(result) {
          return res.render('prodcut', {
            productos: result
          })
        })
        .catch(function(error) {
          console.log(error);
        });
    
      },
    
      resultado: (req, res) =>{
        let busqueda = req.query.product;
    
        Producto.findAll(
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


