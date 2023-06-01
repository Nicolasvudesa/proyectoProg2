module.exports = function (sequelize, dataTypes){
    let alias = 'Comentario';
    let cols = {
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
        tableName: 'tablaComentarios',
        timestamps: false, //Si la tabla no tiene los campos created_at y updated_at
        underscored: true, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.,
    };

    const Comentario = sequelize.define(alias, cols, config);
    Comentario.associate = function(models){
        Comentario.belgonsTo(models,Producto,{
            as: "tablaProductos",
            foreginKey: "idComentarios"
        })
    }
    return Comentario;

};