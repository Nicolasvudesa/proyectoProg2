module.exports = function (sequelize, dataTypes){
    let alias = 'Usuario';
    let col = {
    id:{
        autoIncrement: true,
        primaryKey: true,
        type: dataTypes.INTEGER,
    },

    nombre:{
        type: dataTypes.VARCHAR(50),
    },

    email:{
        type: dataTypes.VARCHAR(50),
    },

    contraseña:{
        type: dataTypes.VARCHAR(50),
    },

    fotoPerfil:{
        type: dataTypes.VARCHAR(100),
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
        underscored: false, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.,
    };

    const Usuarios = sequelize.define(alias, cols, config);

    Usuarios.associate = function(modelos) {
        Usuarios.belongsToMany(modelos.Producto, {
            as: "productos",
            through: "usariosProductos",
            foreignKey: "idUsuario",
            otherKey: "idProducto",
            timestamp: false
        });
    }

    return Usuarios;

};