module.exports = function (sequelize, dataTypes){
    let alias = 'Producto';
    let cols = {
    idProducto	:{
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
        notnull: true,
        type: dataTypes.VARCHAR
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
        tableName: 'tablaproductos',
        timestamps: false, //Si la tabla no tiene los campos created_at y updated_at
        underscored: true, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.,
    };

    const Producto = sequelize.define(alias, cols, config);

    Producto.associate = function(modelos) {
        Producto.belongsTo(modelos.Usuarios, {
            as: "tablaUsuarios",
            foreignKey: "idUsuario",
        
        });
        Producto.hasMany(modelos.Comentario,{
            as : "tablaComentarios",
            foreignKey: "idComentarios",
            timestamps: false
        })
    }

    return Producto;

};