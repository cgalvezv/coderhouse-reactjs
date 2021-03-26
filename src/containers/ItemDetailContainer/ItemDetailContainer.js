import { getItems } from '../../db/mockData'
import React, { useState, useEffect } from 'react'
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import { LoadingPage } from '../../utils'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const { itemId } = useParams()
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getItems().then((items) => {
            const itemById = items.filter(item => item.id === Number(itemId))[0]
            setItem(itemById)
            setLoading(false)
        })
        return () => {
            setLoading(true)
        };
    }, [itemId])
    return (
        <div>
            {
                loading ? 
                    <LoadingPage /> : 
                    <div className="container">
                        <ItemDetail item={item} />
                    </div>
            }
        </div>
    )
}

export default ItemDetailContainer
