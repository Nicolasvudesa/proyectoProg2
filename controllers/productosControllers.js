const e = require('express');
const db = require('../database/models')
const modeloProducto = db.Producto; //Alias del modelo
let op = db.Sequelize.Op

const controller = {

      detalle: function(req, res){

        modeloProducto.findByPk(req.params.id, 

          {include: [{ association: "comentarios", 
              include:[{association: "usuarios"}]},
              
          {association: "usuarios"}]})
          
          .then(function (result) {
            return res.render("product", {producto: result});
          })

          .catch(function (error) {
            console.log(error);
          });

         },

      agregarProducto: (req, res) => {
        return res.render("product-add")
      },

      guardarProducto: function(req, res){

        let infoNuevoProducto= {
         idUsuario: res.locals.user.id,
         producto: req.body.producto,
         descripcion: req.body.descripcion,
         imagen: req.file.filename,
         createdAt: new Date ()}

        modeloProducto.create(infoNuevoProducto)

          .then((result) => {
            return res.redirect('/')
          }).catch((error) => {
            console.log(error)
          })
         },

      editar: (req,res) => {

        let id= req.params.id;

        modeloProducto.findByPk(id)

           .then((result) => {
            console.log(result);
              return res.render("product-edit", {producto:result})
           })

           .catch((error) => {
             console.log(error)
           })
         },

      guardarEdit: (req,res) =>{
        let id= req.params.id;
        let info= req.body;

        modeloProducto.update(info, {
          where: [{id:id}]
        })

        .then((result) => {
          return res.redirect("/products/id/" + id)
        })

        .catch((error) => {
          console.log(error);
        });
      },

    search: function (req, res) {

      let busqueda = req.query.search;

      modeloProducto.findAll({
        include: [{association: 'usuarios'}],
        where: {
          [op.or]: [
            { producto: { [op.like]: `%${busqueda}%` } },
            { descripcion: { [op.like]: `%${busqueda}%` } }]},
        order: [['createdAT', 'DESC']]})

        .then(function (result) {
          return res.render('search-results', {resultados : result});
        })
        .catch(function (error) {
          console.log(error);
        });
     }
}

module.exports = controller
