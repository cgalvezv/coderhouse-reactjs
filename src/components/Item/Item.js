import './Item.css'
import React from 'react'

export const Item = ({item}) => {
    return (
        <div className="item-container card">
            <img src={item.imgUrl} className="card-img-top" alt={item.title}></img>
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{item.description}</h6>
                <p className="card-text">$ {item.price}</p>
            </div>
        </div>
    )
}

export default Item;
