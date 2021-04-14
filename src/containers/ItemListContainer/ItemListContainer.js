import React, { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getItems } from '../../db/firebase'
import ItemList  from '../../components/ItemList/ItemList'
import { LoadingPage } from '../../utils'
import './ItemListContainer.css'

const ItemListContainer = () => {
    const { categoryId } = useParams()
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        setLoading(true);
        let items = categoryId !== undefined ? getItems().where('categoryId', '==', Number(categoryId)) : getItems();
        items.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) console.log('no results!!!');
            setItems(querySnapshot.docs.map(doc => { return { id: doc.id, ...doc.data() } }));
        }).catch((err) => console.log(`Error finding items ${JSON.stringify(err, null, 2)}`))
        .finally(() => setLoading(false))
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
