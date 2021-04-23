import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';
import {  
    Col,
    Card
} from 'react-bootstrap';


const Item = ({item}) => {
    return (
        <Col md="4" className="item-container">
            <Card as={Link} to={`/item/${item.id}`}>
                <Card.Img variant="top" src={item.imgUrl} alt={item.title}/>
                <Card.Body>
                    <Card.Title className="item-black_text">{item.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{item.subtitle}</Card.Subtitle>
                    <Card.Text className="item-black_text">$ {item.price}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Item;
