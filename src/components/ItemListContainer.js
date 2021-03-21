import './ItemListContainer.css'
import React, { useState , useEffect } from 'react'
import { ItemCount } from './Item/ItemCount'
import { ItemList } from './ItemList/ItemList'

const ItemListContainer = () => {
    // Se inicializa estado productos
    const [products, setProducts] = useState([])
    // Se inicializa estado carga inicial
    const [loading, setLoading] = useState(true)
    // Simulo la llamada de los productos cada vez que se renderize el comp
    useEffect(() => {
        const productsDB = [
            {
                id: 1,
                title: 'Camiseta Local Colo-Colo',
                description: 'Año 2020/2021',
                price: 49990,
                imgUrl: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy/69596a51c4544f609b2cac9a015c6e0d_9366/camiseta-local-club-colo-colo.jpg'
            },
            {
                id: 2,
                title: 'Polerón Essential',
                description: 'Cuello Redondo - Color Lila',
                price: 32990,
                imgUrl: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy/7f2d49890cab4d4893f0ac5901007a99_9366/poleron-cuello-redondo-essential.jpg'
            },
            {
                id: 3,
                title: 'Polera Adidas Tricolor',
                description: 'Color Negro',
                price: 27990,
                imgUrl: ' https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy/ef6d15eb37ba416da5d7ac9300f88d76_9366/polera-adicolor-tricolor.jpg'
            },
        ];

        let promise = new Promise ((resolve, reject) => {
            console.log('Resolviendo importación de productos...')
            setTimeout(() => resolve(productsDB), 2000)
        })

        promise.then((products) => {
            setProducts(products)
            setLoading(false)
        })
    })

    return (
        <div>
            {
                loading ? 
                    <div className="overlay">
                        <div class="text-center">
                            <div class="spinner-grow text-success"role="status"></div>
                        </div>
                    </div>
                : 
                    <div>
                        <ItemList items={products}/>
                        <ItemCount initial={1} stock={10}/>
                    </div>
            }
        </div>
    )
}

export default ItemListContainer
