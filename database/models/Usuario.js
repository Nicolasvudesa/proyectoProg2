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
    },

    email:{
        type: dataTypes.STRING,
    },

    contraseña:{
        type: dataTypes.STRING,
    },

    fotoPerfil:{
        type: dataTypes.STRING,
    },

    dni:{
        type: dataTypes.INTEGER,
    },

    fecha:{
        type: dataTypes.DATE,
    },
    createdAt:{
        type: dataTypes.DATE
    },
    updatedAt:{
        type: dataTypes.DATE
    }};

    let config = {
        tableName: 'tablaUsuarios',
        timestamps: false, //Si la tabla no tiene los campos created_at y updated_at
        underscored: true, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.,
    };

    const Usuarios = sequelize.define(alias, cols, config);

    Usuarios.associate = function(modelos) {
        Usuarios.hasMany(modelos.Producto, {
            as: "tablaProductos",
            foreignKey: "idUsuario",
        });
    }

    return Usuarios;

};