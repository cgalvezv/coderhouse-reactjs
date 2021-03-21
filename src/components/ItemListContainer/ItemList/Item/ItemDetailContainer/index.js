import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail';
import { LoadingPage } from '../../../../utils'

const ItemDetailContainer = () => {
    // Se inicializa estado producto
    const [product, setProduct] = useState({})
    // Se inicializa estado carga inicial
    const [loading, setLoading] = useState(true)
    const getItemInfo = () => {
        const itemInfo = {
            id: 1,
            title: 'Camiseta Local Club Colo-Colo',
            description: 'Sale por todo: el pueblo colocolino representa la valentía de David ' + 
            'Arellano que siempre lo guía por la senda triunfal generando un lazo de indestructible' + 
            ' unión, la fortaleza del gran Araucano que va a la lucha jamás sin descansar y la grandeza ' + 
            'de nuestra raza sin igual por su empuje y coraje en las canchas. El equipo que ha sabido ser ' + 
            'campeón y en las lides deportivas femeninas y másculinas pone siempre su chileno corazón.' +
            '¡Como el Colo-Colo no hay!',
            price: 49990,
            imageUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/69596a51c4544f609b2cac9a015c6e0d_9366/Camiseta_Local_Club_Colo-Colo_Blanco_EY3709_01_laydown.jpg',
            stock: 100
        };

        return new Promise((resolve, reject) => {
            setTimeout(() =>  resolve(itemInfo), 2000)
        })
    }

    useEffect(() => {
        getItemInfo().then((item) => {
            setProduct(item)
            setLoading(false)
        })
    })
    return (
        <div>
            {
                loading ? <LoadingPage /> : <ItemDetail item={product} />
            }
        </div>
    )
}

export default ItemDetailContainer
