import './ItemDetail.css'
import React , { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ item }) => {
    const [count, setCount ] = useState(0);
    const [showCartButton, setShowCartButton ] = useState(false);

    const addQtyItems = (qty) => {
        setCount(qty)
        setShowCartButton(qty > 0) 
    }

    return (
        <div className="container_item-detail row">
            <div className="col-md-7">
                <div className="row">
                    <div className="col-md">
                        <h1 className="display-4">{item?.title}</h1>
                        <p className="lead">{item?.description}</p>
                        <h1 className="display-5">$ {item?.price}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md">
                        {
                            showCartButton ? 
                                <div>
                                    <p>Comprarás {count} item(s)</p>
                                    <Link className="btn btn-info" to="/cart">
                                        Terminar mi compra
                                    </Link>
                                </div> :
                                <ItemCount initial={1} stock={item?.stock} onAdd={addQtyItems}/>
                        }
                    </div>
                </div>
            </div>
            <div className="col-md-5">
                <img src={item?.imgUrl} className="img-fluid img-thumbnail" alt={item?.title} />
            </div>
        </div>
    )
}

export default ItemDetail