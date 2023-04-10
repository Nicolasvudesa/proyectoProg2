const data = {
    productos: [
        {
            nombre: 'Audi A4',
            imagen: '/images/productos/Audi_A4.jpeg',
            descripcion: 'Una berlina premium, del segmento D.',
            fecha_de_carga: '01/01/2022',
        },{
            nombre: 'Audi A5 Coupe',
            imagen: '/images/productos/Audi_A5_Coupe.jpeg',
            descripcion: 'Una berlina coupé, del segmento D.',
            fecha_de_carga: '01/02/2022',
        },{
            nombre: 'Audi A6 Allroad',
            imagen: '/images/productos/Audi_A6_Allroad.jpeg',
            descripcion: 'Es la variante todocamino del Audi A6 Avant.',
            fecha_de_carga: '01/03/2022',
        },{
            nombre: 'Audi A7 Sportpack',
            imagen: '/images/productos/Audi_A7_Sportpack.jpeg',
            descripcion: 'Una berlina del segmento del gran sedán de lujo.',
            fecha_de_carga: '01/04/2022',
        },{
            nombre: 'Audi A8',
            imagen: '/images/productos/Audi_A8.jpeg',
            descripcion: 'Una berlina de lujo, del segmento F.',
            fecha_de_carga: '01/05/2022',
        },{
            nombre: 'Audi e-tron',
            imagen: '/images/productos/Audi_e-tron_Sportback.jpg',
            descripcion: 'Automóvil 100% eléctrico con una autonomía que ofrece libertad.',
            fecha_de_carga: '01/11/2022',
        },{
            nombre: 'Audi e-tron GT',
            imagen: '/images/productos/Audi_e-tron_GT.jpeg',
            descripcion: 'Una berlina eléctrica con diseño coupé, del segmento E.',
            fecha_de_carga: '01/06/2022',
        },{
            nombre: 'Audi Q2',
            imagen: '/images/productos/Audi_Q2.jpeg',
            descripcion: 'Un SUV de tamaño pequeño, del segmento B.',
            fecha_de_carga: '01/07/2022',
        },{
            nombre: 'Audi Q3',
            imagen: '/images/productos/Audi_Q3.jpeg',
            descripcion: 'Un SUV del segmento C.',
            fecha_de_carga: '01/08/2022',
        },{
            nombre: 'Audi Q5',
            imagen: '/images/productos/Audi_Q5.jpeg',
            descripcion: 'Un todocamino mediano, del segmento C.',
            fecha_de_carga: '01/09/2022',
        },{
            nombre: 'Audi Q7',
            imagen: '/images/productos/Audi_Q7.jpeg',
            descripcion: 'Un SUV premium de gran tamaño, del segmento E.',
            fecha_de_carga: '01/10/2022',
        },{
            nombre: 'Audi RS Q8',
            imagen: '/images/productos/Audi_RS_Q8.jpg',
            descripcion: 'Es un SUV coupé, del segmento E.',
            fecha_de_carga: '01/12/2022',
        }
    ],
    usuario: {
        email: 'audi@gmail.com',
        usuario: 'audiAr',
        contraseña: 'audiAr',
        fecha_nac: '01/01/2001',
        dni: '12345678',
        foto_perfil:'/images/hasbulla.jpg',
    },
    comentarios: [
        {
            nombre_usuario: 'Nicolas',
            foto_perfil_usuario: '/images/user_sin_foto',
            comentario: 'Me encanta la variedad de colores!'
        },
        {
            nombre_usuario: 'Joaquin',
            foto_perfil_usuario: '/images/user_sin_foto',
            comentario: 'Seguridad, confort y velocidad, todo en uno'
        },
        {
            nombre_usuario: 'Lucio',
            foto_perfil_usuario: '/images/user_sin_foto',
            comentario: 'Me gusta el nuevo diseño!'
        },
    ]
}

module.exports = data