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