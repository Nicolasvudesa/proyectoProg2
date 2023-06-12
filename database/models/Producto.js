module.exports = function (sequelize, dataTypes){
    let alias = 'Producto';
    let cols = {
    id:{
        unsigned: true,
        autoIncrement: true,
        primaryKey: true,
        type: dataTypes.INTEGER
    },

    idUsuario:{
        unsigned: true,
        type: dataTypes.INTEGER
    },

    producto:{
        type:dataTypes.STRING,
        alowNull: false
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

    imagen:{
        type: dataTypes.STRING,
    },


    };

    let config = {
        tableName: 'tablaProductos',
        timestamps: true, //Si la tabla no tiene los campos created_at y updated_at
        underscored: false, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.,
    };

    const Producto = sequelize.define(alias, cols, config);

    Producto.associate = function(models) {
        Producto.belongsTo(models.Usuario, {
            as: "usuarios",
            foreignKey: "idUsuario",
        });
        Producto.hasMany(models.Comentario,{
            as : "comentarios",
            foreignKey: "idProducto",
            timestamps: false
        })
    }

    return Producto;

};