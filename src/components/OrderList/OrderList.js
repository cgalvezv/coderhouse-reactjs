import React from 'react';
import OrderDetail from '../OrderDetail/OrderDetail';
import {
    Accordion
} from 'react-bootstrap';
import './OrderList.css';

const OrderList = ({ orders = [] }) => {
    return (
        <Accordion className="order_list-accordion">
            { orders.map((order, index) => <OrderDetail key={`key-order-${order.id}`} index={index+1} order={order} />)}
        </Accordion>
    )
}

export default OrderList;
