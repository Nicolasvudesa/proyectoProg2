const e = require('express');
const db = require('../database/models')
const modeloProducto = db.Producto; //Alias del modelo
let op = db.Sequelize.Op

const controller = {
    findAll: (req, res) => {
        let filtrado = {
          order: [['createdAT', 'DESC']],
          include: [{association: 'comentarios'},{association: 'usuarios'}]
        };
        modeloProducto.findAll(filtrado)
          .then(function (resultado) {
            return res.render("products", { productos: resultado });
          }).catch(function (error) {
            console.log(error);
          });
      },

      detalle: function(req, res){
        modeloProducto.findByPk(req.params.id,  
          {include: [{ association: "comentarios"}, {association: "usuarios"}]})

          .then(function (result) {
            return res.render("product", {producto: result});
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
        console.log(info) 
        productos.create(info)
          .then((result) => {
            return res.redirect('/')
          }).catch((error) => {
            console.log(error)
          })
        
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
    },

    search: function (req, res) {
      let busqueda = req.query.search;
      modeloProducto.findAll({
        where: {
          [op.or]: [
            { producto: { [op.like]: `%${busqueda}%` } },
            { descripcion: { [op.like]: `%${busqueda}%` } }
          ]
        }
      })
        .then(function (result) {
          return res.render('search-results', {
            resultados : result
          });
        })
        .catch(function (error) {
          console.log(error);
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