create schema base_de_datos;

use  base_de_datos;

create table tablaUsuarios(
-- nombre       		tipo        			restriccion
	id					int						unsigned primary key not null auto_increment,
    nombre				varchar(50)				not null,
	email				varchar(50)				not null unique,
    clave				varchar(500)		    not null, 
    fotoPerfil			text,
    dni					int						not null unique,
    fecha				date					not null,
    createdAt 									TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt 									TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );
    
insert into tablaUsuarios (nombre, email, clave, fotoPerfil, dni, fecha) values
('Hasbulla', 'hasbulla@gmail.com', 'has123', 'https://elcomercio.pe/resizer/FEchEMY9S5a6xZZtG43Nhp7_R50=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/3TC7KWNTGVEN3K7SPO4ZUUEMMU.webp', 43499046, '2001-07-11'),
('Lionel', 'lionelmessi@gmail.com', 'leo123', 'https://cdn.shopify.com/s/files/1/0625/9222/1430/products/IMG_3599_cuadrada_1024x1024.jpg?v=1673115285',  45201858, '2003-11-4'),
('Lewis','hamilton@gmail.com','lewis123', 'https://tork.news/__export/1633142532876/sites/tork/img/2021/10/01/gettyimages-1339505326_crop1633142511339.jpg_366351242.jpg',  43582273, '2001-09-13'),
('Leonardo','dicaprio@gmail.com','dicaprio123', 'https://dam.tbg.com.mx/content/dam/editorialTelevisa/mexico/caras/mx/caras-tv/16/02/28/DATOS_LEONARDO_DICAPRIO_OSCARS_2016_CUADRADA.jpg.imgo.jpg',  45522173, '2004-02-20'),
('Tom','tomcruise@gmail.com','tom123', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ6XzvOMvSI8CS8lrTw1Pgsszuf0Z8cpv-2A&usqp=CAU',  42512173, '2000-01-11');
  
create table tablaProductos(
-- nombre       		tipo        			restriccion
	id			        int						unsigned primary key not null auto_increment,
    idUsuario			int						unsigned, foreign key (idUsuario) references tablaUsuarios(id),
    producto			varchar(50)				not null,
    descripcion			text					not null, 
    imagen				text,
    createdAt 									TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt 									TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );

insert into tablaProductos(idUsuario, producto, descripcion, imagen) values
('1', 'Audi A4', 'Una berlina premium, del segmento D.', 'https://www.motortrend.com/uploads/sites/10/2019/03/2019-audi-a4-premium-sedan-angular-front.png' ),
('2', 'Audi A5 Coupe', 'Una berlina coupé, del segmento D.', 'https://www.motortrend.com/uploads/sites/10/2018/12/2019-audi-a5-premium-coupe-angular-front.png?fit=around%7C875:492.1875'),
('2', 'Audi A6 Allroad', 'Es la variante todocamino del Audi A6 Avant.', 'https://www.motortrend.com/uploads/sites/10/2018/12/2019-audi-a4-allroad-premium-wagon-angular-front.png?fit=around%7C875:492.1875'),
('3', 'Audi A7', 'Una berlina del segmento del gran sedán de lujo.', 'https://www.motortrend.com/uploads/sites/10/2020/11/2021-audi-a7-sportback-premium-plus-4wd-5door-hatchback-angular-front.png'),
('4', 'Audi A8', 'Una berlina de lujo, del segmento F.', 'https://www.motortrend.com/uploads/sites/10/2020/11/2021-audi-a8-l-4wd-sedan-angular-front.png'),
('5', 'Audi E-tron', 'Automóvil 100% eléctrico con una autonomía libertadora.', 'https://www.electrifying.com/files/M_oqaXFZDFM_DcKY/Audetron.png'),
('1', 'Audi E-tron GT', 'Una berlina eléctrica con diseño coupé, del segmento E.', 'https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_default/v1/editorial/vhs/Audi-e-tron-index.png'),
('2', 'Audi Q2', 'Un SUV de tamaño pequeño, del segmento B.', 'https://cdn.wheel-size.com/automobile/body/audi-q2-2021-2022-1612796161.8748221.png'),
('3', 'Audi Q3', 'Un SUV del segmento C.', 'https://www.motortrend.com/uploads/sites/10/2016/10/2017-audi-q3-premium-plus-suv-angular-front.png?fit=around%7C875:492.1875'),
('4', 'Audi Q5', 'Un todocamino mediano, del segmento C.', 'https://www.motortrend.com/uploads/sites/10/2016/10/2017-audi-q5-premium-suv-angular-front.png');
  
  create table tablaComentarios(
-- nombre       		tipo        			restriccion
	id					int						unsigned primary key not null auto_increment,
    idUsuario			int						unsigned, foreign key (idUsuario) references tablaUsuarios(id),
    idProducto			int						unsigned, foreign key (idProducto) references tablaProductos(id),
	comentario			text					not null,
    createdAt 									TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt 									TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );
    
insert into tablaComentarios (idUsuario, idProducto, comentario) values
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
('5', '10', 'Calidad y seguridad, todo en uno');