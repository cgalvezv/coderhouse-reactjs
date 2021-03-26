import React, { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getItems } from '../../db/mockData'
import ItemList  from '../../components/ItemList/ItemList'
import { LoadingPage } from '../../utils'
import './ItemListContainer.css'

const ItemListContainer = () => {
    const { categoryId } = useParams()
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        getItems().then((items) => {
            const itemsByCategory = categoryId !== undefined ? items.filter(item => item.categoryId === Number(categoryId)) : items
            setItems(itemsByCategory)
            setLoading(false)
        })
        return () => {
            setLoading(true)
        };
    }, [categoryId])

    return (
        <div>
            {
                loading ? 
                    <LoadingPage /> : 
                    <div className="container">
                        <ItemList items={items}/>
                    </div>
            }
        </div>
    )
}

export default ItemListContainer
