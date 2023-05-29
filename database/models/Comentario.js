module.exports = function (sequelize, dataTypes){
    let alias = 'Producto';
    let col = {
    id:{
        autoIncrement: true,
        primaryKey: true,
        type: dataTypes.INTEGER,
    },

    idPost:{
        type: dataTypes.INTEGER,
    },

    idUserComent:{
        type: dataTypes.INTEGER,
    },

    comentario:{
        type: dataTypes.INTEGER,
    },

    createdAt:{
        type: dataTypes.DATE,
    },

    updatedAt:{
        type: dataTypes.DATE,
    },
    };

    let config = {
        tableName: 'tablaProductos',
        timestamps: false, //Si la tabla no tiene los campos created_at y updated_at
        underscored: false, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.,
    };

    const Productos = sequelize.define(alias, cols, config);

    return Productos;

};