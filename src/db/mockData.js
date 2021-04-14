// Método que devuelve la promesa para obtener los productos desde un mock DB
export const getItems =() => {
    const productsDB = [
        {
            id: 1,
            title: 'Camiseta Club Colo Colo',
            subtitle: 'Color Blanco - Local - Año 2020/2021',
            categoryId: 2,
            price: 49990,
            imgUrl: 'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto:sensitive,fl_lossy/69596a51c4544f609b2cac9a015c6e0d_9366/camiseta-local-club-colo-colo.jpg',
            description: 'Sale por todo: el pueblo colocolino representa la valentía de David ' + 
                'Arellano que siempre lo guía por la senda triunfal generando un lazo de indestructible' + 
                ' unión, la fortaleza del gran Araucano que va a la lucha jamás sin descansar y la grandeza ' + 
                'de nuestra raza sin igual por su empuje y coraje en las canchas. El equipo que ha sabido ser ' + 
                'campeón y en las lides deportivas femeninas y másculinas pone siempre su chileno corazón.' +
                '¡Como el Colo-Colo no hay!',
            stock: 100
        },
        {
            id: 2,
            title: 'Polerón Essential',
            subtitle: 'Cuello Redondo - Color Lila',
            categoryId: 1,
            price: 32990,
            imgUrl: 'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto:sensitive,fl_lossy/7f2d49890cab4d4893f0ac5901007a99_9366/poleron-cuello-redondo-essential.jpg',
            description: 'Minimalista y moderno. Este polerón está confeccionado en felpa francesa para un tacto ' +
                'suave y un ajuste cómodo. Un pequeño logo del Trifolio de adidas le pone el toque final al look.',
            stock: 50
        },
        {
            id: 3,
            title: 'Polera Adidas Tricolor',
            subtitle: 'Color Negro',
            categoryId: 1,
            price: 27990,
            imgUrl: 'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto:sensitive,fl_lossy/ef6d15eb37ba416da5d7ac9300f88d76_9366/polera-adicolor-tricolor.jpg',
            description: 'Parece una coincidencia que las mejores cosas de la vida vengan de tres en tres, ' +
                'pero no lo es. El diseño tricolor de esta polera y las emblemáticas 3 Tiras lo demuestran. Además, ' +
                'su tacto ultrasuave se asemeja al de tus poleras preferidas que has lavado un millón de veces. Así de suave. ' +
                'Nuestros productos de algodón apoyan el cultivo de algodón sostenible. Esto hace parte de nuestro anhelo de ponerle fin a la contaminación por plástico.',
            stock: 2
        },
        {
            id: 4,
            title: 'Chaqueta Colo Colo',
            subtitle: 'Color Negro',
            categoryId: 2,
            price: 49990,
            imgUrl: 'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto:sensitive,fl_lossy/b4e1f85dfc5f42aba4bcacd3013ab20f_9366/chaqueta-colo-colo.jpg',
            description: 'Demasiado bueno para usarse solo en la cancha. La chaqueta adidas Tiro debutó como una prenda de entrenamiento, pero ahora hace parte de la moda urbana. ' +
                'Desde el tejido absorbente AEROREADY a los bolsillos laterales con cierre, los detalles te mantienen cómodo dentro y fuera de la cancha. '+
                'Este producto está hecho con Primegreen, una serie de materiales reciclados de alto desempeño.',
            stock: 40
        },
        {
            id: 5,
            title: 'Pantalón buzo Colo Colo',
            subtitle: 'Color Negro',
            categoryId: 2,
            price: 34990,
            imgUrl: 'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto:sensitive,fl_lossy/05aab9060b6c43e6b94baccb015826bc_9366/pantalon-de-entrenamiento-colo-colo.jpg',
            description: 'No puedes entrenar para la vida real. Pero si puedes lucir bien mientras te enfrentas a ella. Este pantalón de entrenamiento adidas Tiro 21 surgió de la ' +
                'cultura futbolera. Mantiene tu cuerpo seco y cómodo gracias a su tejido suave y absorbente y las clásicas piernas cónicas y cierres en los tobillos que identifican ' +
                ' a la línea Tiro te permiten lucir más tus tenis.Este producto está confeccionado con Primegreen, una serie de materiales reciclados de alto desempeño',
            stock: 85
        },
        {
            id: 6,
            title: 'Camiseta Club U De Chile',
            subtitle: 'Color Rosa - Visitante - Año 2020-2021',
            categoryId: 2,
            price: 49990,
            imgUrl: 'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto:sensitive,fl_lossy/ad7b804c4ac545898a18accb0172679a_9366/camiseta-visitante-club-universidad-de-chile-20-21.jpg',
            description: 'Su pasión por el deporte rey no tiene límites. Por esto adidas creó esta camiseta de visitante Club Universidad de Chile en tonos de color rosa llamativos. Incorpora' +
                'tecnología de absorción AEROREADY que se encarga de mantenerte seco dentro y fuera de la cancha. Lleva "Romántico Viajero" estampado bajo en cuello en la espalda para destacar tu amor ' +
                'por el club en todo momento. Este producto está hecho con material reciclado como parte de nuestro anhelo de ponerle fin a la contaminación por plástico',
            stock: 2
        },
        {
            id: 7,
            title: 'Camiseta Oficial Argentina',
            subtitle: 'Color Blanco/Celeste - Home - Año 2021',
            categoryId: 2,
            price: 79990,
            imgUrl: 'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto:sensitive,fl_lossy/d8e9471baf89495aa6fbac0401885da2_9366/camiseta-home-oficial-argentina.jpg',
            description: 'La camiseta que representa un país que vive y respira fútbol, refleja la unión que genera en todo el mundo tanto en el juego como en los estadios y ' +
                'en las calles. Con esta camiseta, el escudo siempre en el pecho. Ahora con tecnología HEAT.RDY para mantenerte con alto rendimiento en todo momento.',
            stock: 200
        },
        {
            id: 8,
            title: 'Polera Skateboarding 4.0',
            subtitle: 'Color Negro - Género Neutro',
            categoryId: 1,
            price: 19990,
            imgUrl: 'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto:sensitive,fl_lossy/acc8d084ac484846bc05acd700968320_9366/polera-skateboarding-4.0-logo-genero-neutro.jpg',
            description: 'Esta polera de adidas Skateboarding está confeccionada en un tejido de algodón de grosor medio con un corte clásico. Luce un Trifolio en el pecho y el logo de ' +
                'Skateboarding 4.0 en la espalda. Nuestros productos de algodón apoyan el cultivo de algodón sostenible. Esto hace parte de nuestro anhelo de ponerle fin a la contaminación por plástico.',
            stock: 85
        },
        {
            id: 9,
            title: 'Polerón con capucha Adicolor',
            subtitle: 'Color Lila',
            categoryId: 1,
            price: 64990,
            imgUrl: 'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto:sensitive,fl_lossy/b9084f19977e4fdd9f53ac8601435ba5_9366/poleron-con-capucha-adicolor.jpg',
            description: 'Si comodidad es lo que buscas, este polerón con capucha ultrasuave es justo lo que necesitas. No importa si estás descansando en casa o en ' +
                'alguna de tus aventuras urbanas, su diseño llamativo combina una estética retro con un toque actual. Los logos del Trifolio en las mangas aportan ' +
                ' una perspectiva moderna a esta prenda clásica. Además, su corte holgado te permite combinarlo con otras prendas debajo dependiendo del frío. ' +
                'Nuestros productos de algodón apoyan el cultivo de algodón sostenible. Esto hace parte de nuestro anhelo de ponerle fin a la contaminación por plástico.',
            stock: 5
        },
        {
            id: 10,
            title: 'Polera The Simpsons - Krusty Burger',
            subtitle: 'Color Blanco',
            categoryId: 1,
            price: 62990,
            imgUrl: 'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto:sensitive,fl_lossy/068af47018f84b31a3a8acbd00f39dfc_9366/polera-the-simpsons-krusty-burger.jpg',
            description: 'Smps Kb Tee es un nuevo producto para Hombre de adidas. Te invitamos a ver las imágenes para apreciar más detalles desde diferentes ángulos. ' +
                'Si ya conoces Smps Kb Tee puedes dejar una reseña abajo; siempre nos encanta conocer tu opinión.Aún estamos trabajando para tener más información de Smps ' +
                'Kb Tee, así que vuelva pronto. Mientras tanto, toma nota del número de artículo que identifica el producto HA5821 para que lo puedas encontrar de nuevo fácilmente.',
            stock: 1
        }
    ];

    return new Promise ((resolve, reject) => {
        console.log('Resolviendo obtención de productos...')
        setTimeout(() => resolve(productsDB), 2000)
    });
};