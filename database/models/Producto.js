module.exports = function (sequelize, dataTypes){
    let alias = 'Producto';
    let cols = {
    idProducto	:{
        unsigned: true,
        autoIncrement: true,
        primaryKey: true,
        type: dataTypes.INTEGER
    },

    imagen:{
        type: dataTypes.STRING,
    },

    producto:{
        type:dataTypes.STRING,
        alowNull: false
    },

    idUsuario:{
        unsigned: true,
        type: dataTypes.INTEGER
    },

  
    descripcion:{
        notnull: true,
        type: dataTypes.TEXT
    },

    createdAt:{
        type: dataTypes.DATE
    },

    updatedAt :{
        type: dataTypes.DATE
    },
    };

    let config = {
        tableName: 'tablaProductos',
        timestamps: false, //Si la tabla no tiene los campos created_at y updated_at
        underscored: true, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.,
    };

    const Producto = sequelize.define(alias, cols, config);

    Producto.associate = function(models) {
        Producto.belongsTo(models.Usuario, {
            as: "usuarios",
            foreignKey: "idUsuarios",
        
        });
        Producto.hasMany(models.Comentario,{
            as : "comentarios",
            foreignKey: "idPost",
            timestamps: false
        })
    }

    return Producto;

};