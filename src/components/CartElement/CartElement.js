import React from 'react';
import './CartElement.css';
import {
    Row,
    Col,
    Card,
    Button,
    OverlayTrigger,
    Tooltip,
    Image
 } from 'react-bootstrap';

const CartElement = ({ element, removeElement }) => {
    return (
        <Col md="12">
            <Card className="mb-3 card-cart">
                <Row className="g-0">
                    <Col>
                        <OverlayTrigger
                            placement="bottom"
                            overlay={<Tooltip>Eliminar item</Tooltip>}
                        >
                            <Button className="remove-item_button" onClick={() => removeElement(element.item?.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </Button>
                        </OverlayTrigger>
                    </Col>
                    <Col md="4">
                        <Image src={element.item?.imgUrl} alt={element.item?.title} fluid/>
                    </Col>
                    <Col md="7">
                        <Card.Body>
                            <Card.Title>{ element.item?.title }</Card.Title>
                            <Card.Text className="text-muted">{ element.item?.subtitle }</Card.Text>
                            <Card.Text>
                                <small className="text-muted">Precio Unitario: $ {element.item?.price}</small>
                                <br></br>
                                <small className="text-muted">Cantidad: {element.quantity}</small>
                            </Card.Text>
                            <Card.Text>$ { element.item?.price *  element.quantity }</Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Col>
    )
}

export default CartElement
