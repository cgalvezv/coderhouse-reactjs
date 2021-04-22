import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getItem } from '../../services';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import { LoadingPage } from '../../utils';

const ItemDetailContainer = () => {
    const { itemId } = useParams()
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        getItem(itemId).get().then((doc) => {
            if (!doc.exists) {
                console.log(`No exist doc with id ${itemId}`);
                return;
            }
            setItem({ id: doc.id, ...doc.data() });
        }).catch((err) => console.log(`Error finding item ${JSON.stringify(err, null, 2)}`))
        .finally(() => setLoading(false))
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
