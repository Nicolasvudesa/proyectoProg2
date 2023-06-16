const e = require('express');
const db = require('../database/models')
const modeloProducto = db.Producto; //Alias del modelo
const modeloComentario = db.Comentario;
let op = db.Sequelize.Op

const controller = {

      detalle: function(req, res){

        modeloProducto.findByPk(req.params.id, 

          {include: [{association: "comentarios",
                     include: [{ association: "usuarios" }],
                     limit: 4, // Limitar el número de comentarios
                     order: [["createdAt", "DESC"]]},

                     {association: "usuarios" }]})
          
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

        let errors = {}
        if(req.body.producto=="" || req.body.descripcion=="" || req.body.foto==""){
            errors.message = "Por favor, asegúrese de completar todos los campos ante de agregar un producto."
            res.locals.errors = errors
            return res.render("product-add")}  
        else {
                let infoNuevoProducto= {
                    idUsuario: res.locals.user.id,
                    producto: req.body.producto,
                    descripcion: req.body.descripcion,
                    imagen: req.body.foto,
                    createdAt: new Date ()}

                    modeloProducto.create(infoNuevoProducto)

                      .then((result) => {
                        return res.redirect('/')
                      })

                      .catch((error) => {
                        console.log(error)
                      })}
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
      if(busqueda.length === 0){
        return res.redirect("/")}  
        else {
            modeloProducto.findAll({
               include: [{association: 'usuarios'}],
                where: {[op.or]: [ { producto: { [op.like]: `%${busqueda}%` } },
                                { descripcion: { [op.like]: `%${busqueda}%` } }]},
                order: [['createdAT', 'DESC']]})

               .then(function (result) {
                    return res.render('search-results', {resultados : result});
                })

               .catch(function (error) {
                    console.log(error);
                });
             }
    },

    agregarComentario: function (req, res) {

       let errors = {}

        if(req.body.comentario===""){
            errors.message = "Por favor, antes de agregar un comentario asegurese que no este vacio."
            res.locals.errors = errors

            modeloProducto.findByPk(req.params.idProducto, //Lo necesite poner porque sino no podia mostrar el error en pantalla porque con redirect no trasladaba los errores.
                     
              {include: [{association: "comentarios",
                         include: [{ association: "usuarios" }],
                         limit: 4, // Limitar el número de comentarios
                         order: [["createdAt", "DESC"]]},
    
                         {association: "usuarios" }]})
              
              .then(function (result) {
                return res.render("product", {producto: result});
              })
    
              .catch(function (error) {
                console.log(error);
              });
            
        }else{
        
            let infoNuevoComentario = {
                idUsuario: res.locals.user.id,
                idProducto: req.params.idProducto,
                comentario: req.body.comentario,
                createdAt: new Date ()}

                 modeloComentario.create(infoNuevoComentario)

                   .then(function(result){
                       return res.redirect('/products/detalle/' + req.params.idProducto)
                   })

                   .catch(function(error){
                        console.log(error)
                   })
             }
    }
}
        



module.exports = controller
