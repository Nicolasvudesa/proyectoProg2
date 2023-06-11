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

    idUsuarios:{
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
        timestamps: true, //Si la tabla no tiene los campos created_at y updated_at
        underscored: false, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.,
    };

    const Comentario = sequelize.define(alias, cols, config);

    Comentario.associate = function (models){
        Comentario.belongsTo(models.Producto,{
            as: "productos",
            foreignKey: "idPost"
        })
        Comentario.belongsTo(models.Usuario,{
            as: "usuarios",
            foreignKey: "idUsuarios"
        })
    }
    
    return Comentario;

};