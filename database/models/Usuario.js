module.exports = function (sequelize, dataTypes){
    let alias = 'Usuario';
    let col = {
    id:{
        autoIncrement: true,
        primaryKey: true,
        type: dataTypes.INTEGER,
    },

    nombre:{
        type: dataTypes.STRING,
    },

    email:{
        type: dataTypes.DECIMAL,
    },

    contraseña:{
        type: dataTypes.INTEGER,
    },

    fotoPerfil:{
        type: dataTypes.DATE,
    },

    dni:{
        type: dataTypes.INTEGER,
    },

    fecha:{
        type: dataTypes.INTEGER,
    },
    createdAt:{
        
    },
    updatedAt:{
        
    }};

    let config = {
        tableName: 'tablaUsuarios',
        timestamps: false, //Si la tabla no tiene los campos created_at y updated_at
        underscored: false, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.,
    };

    const Usuarios = sequelize.define(alias, cols, config);

    return Usuarios;

};