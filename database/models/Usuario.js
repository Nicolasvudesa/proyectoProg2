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
        type: dataTypes.TEXT,
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
        timestamps: true, 
        underscored: false, 
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
