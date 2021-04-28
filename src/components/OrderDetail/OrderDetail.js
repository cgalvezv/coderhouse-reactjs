import React from 'react'
import {
    Accordion,
    Button,
    Card,
    Col,
    OverlayTrigger,
    Tooltip,
    Row
} from 'react-bootstrap';
import './OrderDetail.css'

const OrderDetail = ({ index, order }) => {

    const getOrderDateFormated = () => order.date.toDate().toLocaleDateString('es-ES');
    
    return (
        <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" className="order_detail-toggle" eventKey={index}>
                    <Row>
                        <Col md="4">
                            <OverlayTrigger
                                key="left"
                                placement="left"
                                overlay={
                                    <Tooltip>
                                        Click para ver detalle de la orden
                                    </Tooltip>
                                }
                            >
                                <span className="text-left">Nº {order.id}</span>
                            </OverlayTrigger>
                        </Col>
                        <Col md="8">
                            <p className="text-right">{order.buyer.name} - {order.buyer.phone}</p>
                        </Col>
                    </Row>
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={index}>
                <Card.Body className='text-center'>
                    <Row className="order_detail-item">
                        <Col md="6">
                            <p className="text-left">Fecha compra: </p>
                        </Col>
                        <Col md="6">
                            <p className="text-right"><b>{ getOrderDateFormated() }</b></p>
                        </Col>
                    </Row>
                    <Row className="order_detail-item">
                        <Col md="6">
                            <p className="text-left">Productos: </p>
                        </Col>
                        <Col md="6">
                            <ul>
                                { order.items.map(item => <li key={`key-order-item-${item.id}`} className="text-right order_detail-item_list">{item.title} - ${item.price} </li>)}
                            </ul>
                        </Col>
                    </Row>
                    <Row className="order_detail-item">
                        <Col md="6">
                            <p className="text-left">Total compra: </p>
                        </Col>
                        <Col md="6">
                            <p className="text-right"><b>$ {order.total}</b></p>
                        </Col>
                    </Row>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    )
}

export default OrderDetail
