import './ItemDetail.css'
import React from 'react'
import { ItemCount } from './../../ItemCount'

const ItemDetail = ({ item }) => {
    return (
        <div className="container_item-detail row">
            <div className="col-md-7">
                <h1 class="display-4">{item?.title}</h1>
                <p className="lead">{item?.description}</p>
                <h1 className="display-5">$ {item?.price}</h1>
                <ItemCount initial={1} stock={item?.stock}/>
            </div>
            <div className="col-md-5">
                <img src={item?.imageUrl} class="img-fluid img-thumbnail" alt={item?.title} />
            </div>
        </div>
    )
}

export default ItemDetail
