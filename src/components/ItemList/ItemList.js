import './ItemList.css'
import React from 'react'
import Item from '../Item/Item'


const ItemList = ({items = []}) => {
    return (
        <div className="row">
            {items.map((item) => <Item key={`item-key-${item.id}`} item={item} />)}   
        </div>
    )
}

export default ItemList;
