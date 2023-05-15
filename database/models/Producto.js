module.exports = function (sequelize, dataTypes){
    let alias = 'Producto';
    let col = {
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
        type: dataTypes.VARCHAR(50)
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
        underscored: false, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.,
    };

    const Productos = sequelize.define(alias, cols, config);

    Productos.associate = function(modelos) {
        Productos.belongsToMany(modelos.Usuario, {
            as: "usuarios",
            through: "usariosProductos",
            foreignKey: "idProducto",
            otherKey: "idUsuario",
            timestamp: false
        });
    }

    return Productos;

};