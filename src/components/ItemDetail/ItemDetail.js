import React , { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartRawContext } from "../../contexts/cartContext";
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import {  
    Row,
    Col,
    Button,
    Image
} from 'react-bootstrap';

const ItemDetail = ({ item }) => {
    const [ count, setCount ] = useState(0);
    
    const { addItemToCart } = useContext(CartRawContext)

    const addQtyItems = (qty) => {
        setCount(qty)
        addItemToCart(item, qty)
    }

    const availableStockText = item.stock > 0 ? `Stock disponible: ${item?.stock}` : 'No hay stock disponible';

    return (
        <Row className="container_item-detail">
            <Col md="7">
                <Row>
                    <Col md="12">
                        <h1 className="display-4">{item?.title}</h1>
                        <p className="lead">{item?.description}</p>
                        <b>{availableStockText}</b>
                        <h1 className="display-5 price-text">$ {item?.price}</h1>
                    </Col>
                </Row>
                {
                    item.stock > 0 &&
                        <Row>
                            <Col md="12" className="text-center">
                                <ItemCount initial={1} stock={item?.stock} onAdd={addQtyItems}/>
                            </Col>
                        </Row>
                }
                {
                    count > 0 && 
                        <Row className="container_item-added">
                            <Col md="6">
                                <p>Agregaste {count} item(s)</p>
                            </Col>
                            <Col md="6">
                                <Button as={Link} to="/cart">
                                    Terminar mi compra
                                </Button>
                            </Col>
                        </Row>
                }
            </Col>
            <Col md="5">
                <Image src={item?.imgUrl} alt={item?.title} fluid thumbnail/>
            </Col>
        </Row>
    )
}

export default ItemDetail
