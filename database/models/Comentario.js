module.exports = function (sequelize, dataTypes){
    let alias = 'Producto';
    let col = {
    id:{
        autoIncrement: true,
        primaryKey: true,
        type: dataTypes.INTEGER,
    },

    title:{
        type: dataTypes.STRING,
    },

    rating:{
        type: dataTypes.DECIMAL,
    },

    awards:{
        type: dataTypes.INTEGER,
    },

    release_date:{
        type: dataTypes.DATE,
    },

    length:{
        type: dataTypes.INTEGER,
    },

    genre_id:{
        type: dataTypes.INTEGER,
    }};

    let config = {
        tableName: 'tablaProductos',
        timestamps: false, //Si la tabla no tiene los campos created_at y updated_at
        underscored: false, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.,
    };

    const Productos = sequelize.define(alias, cols, config);

    return Productos;

};