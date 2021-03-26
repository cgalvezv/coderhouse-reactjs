import './Item.css'
import React from 'react'
import { Link } from 'react-router-dom';

const Item = ({item}) => {
    return (
        <div className="col-md-4 item-container">
            <Link className="card" to={`/item/${item.id}`}>
                <img src={item.imgUrl} className="card-img-top" alt={item.title}></img>
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{item.subtitle}</h6>
                    <p className="card-text">$ {item.price}</p>
                </div>
            </Link>
        </div>
    )
}

export default Item;
