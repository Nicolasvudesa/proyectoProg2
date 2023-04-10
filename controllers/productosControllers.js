const controller = {
    index: function(req,res){
        res.send('aca mandamos los productos')
    
    },
    add:  function(req,res){
        res.render('product-add')
}
}

module.exports = controller