import React, { useState , useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getItems } from '../../services';
import ItemList  from '../../components/ItemList/ItemList';
import { LoadingPage } from '../../utils';
import { Container } from 'react-bootstrap';

const ItemListContainer = () => {
    const { categoryId } = useParams()
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)

    const history = useHistory()
    
    useEffect(() => {
        setLoading(true);
        let items = categoryId !== undefined ? getItems().where('categoryId', '==', Number(categoryId)) : getItems();
        items.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                history.push(`/category/${categoryId}/no-results`);
                return;
            }
            setItems(querySnapshot.docs.map(doc => { return { id: doc.id, ...doc.data() } }));
        }).catch((err) => console.log(`Error finding items ${JSON.stringify(err, null, 2)}`))
        .finally(() => setLoading(false))

        return () => { setItems([]) }
    }, [categoryId, history])

    return (
        <div>
            {
                loading ? 
                    <LoadingPage /> : 
                    <Container>
                        <ItemList items={items}/>
                    </Container>
            }
        </div>
    )
}

export default ItemListContainer
