const db = require('../database/models')
const productos = db.Producto; //Alias del modelo


const controller = {
    findAll: (req, res) => {
        let filtrado = {
          order: [['createdAT', 'DESC']],
          include: [{association: 'comentarios'},{association: 'usuarios'}]
        };
        productos.findAll(filtrado)
          .then(function (resultado) {
            
            return res.render("products", { productos: resultado });
          }).catch(function (error) {
            console.log(error);
          });
    
      },

      detalle: (req, res) => {
        let id = req.params.id; 
        let relacion =  {
          include: { association: "comentarios",
          include: {association: "usuarios"} }
        };
        productos.findByPk(id, relacion)
          .then(function (result) {
            return res.render("products", {
              productos: result,
            });
          })
          .catch(function (error) {
            console.log(error);
          });
      },

      agregarForm: (req, res) => {
        return res.render("product-add");
      },

      guardarForm: (req, res) => {
        let info = req.body;
        info.idUsuario = req.session.user.id
          productos.create(info)
          .then((result) => {
            return res.redirect("/products/all");
          })
          .catch((error) => {
            console.log(error);
          });
      },

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
/***
createForm: (req,res) => {
    return res.render('product-add', {usuarioLogueado: true, {usuario: "messi"}})
},
save: (req,res) => {
    let info = req.body;
    console.log(info)
    db.products.create(info)
    .then((devolucion)=>{
        return res.redirect('/')
    }).catch((error) => {
        console.log(error)
    })
    }
}*/