import React from 'react';
import Item from '../Item/Item';
import './ItemList.css'
import {  
    Row
} from 'react-bootstrap';


const ItemList = ({items = []}) => {
    return (
        <Row>
            { items.map((item) => <Item key={`item-key-${item.id}`} item={item} />) }   
        </Row>
    )
}

export default ItemList;
