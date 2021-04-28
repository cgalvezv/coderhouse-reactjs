import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getItem } from '../../services';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import { 
    LoadingPage,
    GoBackButton
 } from '../../utils';
import { Container } from 'react-bootstrap';

const ItemDetailContainer = () => {
    const { itemId } = useParams()
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(false)

    const history = useHistory()

    useEffect(() => {
        setLoading(true);
        getItem(itemId).get().then((doc) => {
            if (!doc.exists) {
                history.push(`/item/${itemId}/no-exists`);
                return;
            }
            setItem({ id: doc.id, ...doc.data() });
        }).catch((err) => console.log(`Error finding item ${JSON.stringify(err, null, 2)}`))
        .finally(() => setLoading(false))
    }, [itemId, history])
    
    return (
        <div>
            {
                loading ? 
                    <LoadingPage /> :
                    <>
                        <div className="text-left">
                            <GoBackButton />
                        </div>
                        <Container>
                            <ItemDetail item={item} />
                        </Container>
                    </>
            }
        </div>
    )
}

export default ItemDetailContainer
