import './ItemList.css'
import React from 'react'
import { Item } from './../Item/Item'


export const ItemList = ({items = []}) => {
    return (
        <div className="items-container">
            {items.map(item => <Item item={item} />)}   
        </div>
    )
}

export default ItemList;
