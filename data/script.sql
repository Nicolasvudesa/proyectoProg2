create schema base_de_datos;

use  base_de_datos;

create table tablaUsuarios(
-- nombre       		tipo        			restriccion
	id					int						unsigned primary key not null auto_increment,
    nombre				varchar(50)				not null,
	email				varchar(50)				not null unique,
    contraseña			varchar(50)				not null, 
    fotoPerfil			varchar(100),
    dni					int						not null unique,
    fecha				date					not null,
    createdAt 									TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt 									TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );
    
create table tablaProductos(
-- nombre       		tipo        			restriccion
	idProducto			int						unsigned primary key not null auto_increment,
    producto			varchar(50)				not null,
    imagen              varchar(500)            not null,
    descripcion			text					not null, 
    createdAt 									TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt 									TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    idUsuarios			int						unsigned, foreign key (idUsuarios) references tablaUsuarios(id)
    );
    
create table tablaComentarios(
-- nombre       		tipo        			restriccion
	id					int						unsigned primary key not null auto_increment,
	idPost				int						unsigned, foreign key (idPost) references tablaProductos(idProducto),
	idUsuarios			int						unsigned, foreign key (idUsuarios) references tablaUsuarios(id),
	comentario			text					not null,
    createdAt 									TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt 									TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
   
    );

insert into tablaUsuarios (nombre, email, contraseña, fotoPerfil, dni, fecha) values
('Nicolas', 'Nicolas@gmail.com', 'nicolas123', '/images/hasbulla.jpg', 43499046, '2001-07-11'),
('Lucas', 'Lucas@gmail.com', 'lucas123', '/images/hasbulla.jpg',  45201858, '2003-11-4'),
('Joaquin','Joaquin@gmail.com','joaquin123', '/images/hasbulla.jpg',  43582273, '2001-09-13'),
('Lucio','Lucio@gmail.com','lucio123', '/images/hasbulla.jpg',  45522173, '2004-02-20'),
('Felipe','Felipe@gmail.com','felipe123', '/images/hasbulla.jpg',  42512173, '2000-01-11');

insert into tablaProductos(idUsuario, producto, imagen, descripcion) values
('1', 'Audi A4','/images/productos/Audi_A4.jpeg',  'Auto'),
('2', 'Audi A5','/images/productos/Audi_A5_Coupe.jpeg', 'Auto'),
('2', 'Audi A6','/images/productos/Audi_A6_Allroad.jpeg', 'Auto'),
('3', 'Audi A7','/images/productos/Audi_A7_Sportpack.jpeg', 'Auto'),
('4', 'Audi A8','/images/productos/Audi_A8.jpeg', 'Auto'),
('5', 'Audi E-tron','/images/productos/Audi_e-tron_GT.jpeg', 'Auto'),
('1', 'Audi E-tron GT','/images/productos/' 'Auto'),
('2', 'Audi Q2','/images/productos/', 'Camioneta'),
('3', 'Audi Q3','/images/productos/', 'Camioneta'),
('4', 'Audi Q4','/images/productos/', 'Camioneta');

insert into tablaComentarios (idUserComent, idPost, comentario) values
('1', '1', 'Muy buen auto!'),
('2', '1', 'Buen color'),
('3', '1', 'Muy comodo'),
('4', '1', 'Que rapido!'),
('5', '2', 'Buena gama de colores'),
('1', '2', 'Muy espacioso'),
('2', '2', 'Que feo color'),
('3', '2', 'Mala aerodinamica'),
('4', '3', 'Muy lindo!'),
('5', '3', 'Que lindo color'),
('1', '3', 'Increible auto!'),
('2', '3', 'Muy buen auto!'),
('3', '4', 'Feo'),
('4', '4', 'Muy veloz'),
('5', '4', 'Wow'),
('1', '4', 'No concuerdo con la velocidad'),
('2', '5', 'Muy buen auto!'),
('3', '5', 'Que velocidad!'),
('4', '5', 'Lo que buscaba hace rato'),
('5', '5', 'Muy buen color'),
('1', '6', 'Muy buen auto!'),
('2', '6', 'Increible'),
('3', '6', 'Un auto muy bajo'),
('4', '6', 'Muy comodo'),
('5', '7', 'Muy buen auto!'),
('1', '7', 'Buen diseño'),
('2', '7', 'Mucha comodidad'),
('3', '7', 'Perfecto para viajar'),
('4', '8', 'Muy buen auto!'),
('5', '8', 'Cuanta calidad'),
('1', '8', 'excelente auto'),
('2', '8', 'Feos los colores disponibles'),
('3', '9', 'Muy buen auto!'),
('4', '9', 'Veloz y comodo'),
('5', '9', 'Increible'),
('1', '9', 'Demasiado caro'),
('2', '10', 'Muy buen auto!'),
('3', '10', 'Velocidad pura'),
('4', '10', 'Muy comodo'),
('5', '10', 'Calidad y seguridad, todo en uno')