module.exports = function (sequelize, dataTypes){
    let alias = 'Usuario';
    let cols = {
    id:{
        autoIncrement: true,
        primaryKey: true,
        type: dataTypes.INTEGER,
    },

    nombre:{
        type: dataTypes.STRING,
        allowNull: false
    },

    email:{
        type: dataTypes.STRING,
        allowNull: false
    },

    clave:{
        type: dataTypes.STRING,
        allowNull: false
    },

    fotoPerfil:{
        type: dataTypes.STRING,
    },

    dni:{
        type: dataTypes.INTEGER,
        allowNull: false
    },

    fecha:{
        type: dataTypes.DATE,
        allowNull: false
    },

    createdAt:{
        type: dataTypes.DATE
    },

    updatedAt:{
        type: dataTypes.DATE
    }};

    let config = {
        tableName: 'tablaUsuarios',
        timestamps: true, //Si la tabla no tiene los campos created_at y updated_at
        underscored: false, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.,
    };

    const Usuarios = sequelize.define(alias, cols, config);

    Usuarios.associate = function(models) {
        Usuarios.hasMany(models.Producto, {
            as: "productos",
            foreignKey: "idUsuario",
        })
        Usuarios.hasMany(models.Comentario, {
            as: "comentarios",
            foreignKey: "idUsuario",
        })
    }

    return Usuarios;

};
