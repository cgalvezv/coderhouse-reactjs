import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { addOrder, triggerMassiveStockUpdate } from '../../services';
import { CartRawContext } from "../../contexts/cartContext";
import CartElement from '../CartElement/CartElement';
import { ResultPage, LoadingPage } from '../../utils';
import './Cart.css'
import { 
    Container,
    Row,
    Col,
    Alert,
    Button,
    Form
 } from 'react-bootstrap';

const Cart = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false)

    const { cart, clearCart, removeItemToCart, getTotalCart } = useContext(CartRawContext)

    const history = useHistory()

    const formInputs = [
        {
            title: 'Nombre',
            state: name,
            onChange: e => setName(e.target.value),
            size: 5
        },
        {
            title: 'E-Mail',
            state: email,
            onChange: e => setEmail(e.target.value),
            size: 4
        },
        {
            title: 'Teléfono',
            state: phone,
            onChange: e => setPhone(e.target.value),
            size: 3
        }
    ]

    const isValidClientInfo = () => {
        const hasName = (name && name !== '');
        const hasPhone = (phone && phone !== '');
        const hasEmail = (email && email !== '');
        return hasName && hasPhone && hasEmail;
    }

    const generateOrder = () => {
        setLoading(true);
        let order = {};

        order.buyer = { name, email, phone };
        order.total = getTotalCart();
        order.items = cart.map(cartItem => {
            const id = cartItem.item.id;
            const title = cartItem.item.title;
            const price = cartItem.item.price * cartItem.quantity;
            return { id, title, price };
        })
        
        addOrder(order)
            .then(document => {
                console.log(`Orden agregada exitosamente!!! orden ID ${document.id}`)
                console.log('Se inicia actualización de stock en DB...')
                triggerMassiveStockUpdate(cart)
                    .then(() => {
                        console.log('Actualización masiva de stock exitosa!')
                        clearCart();
                        setLoading(false);
                    })
                    .catch(err => console.log(err))
                    .finally(() => {
                        console.log(`Proceso de actualización masiva de stock finalizada\nRedirigiendo al home...`)
                        history.push(`/cart/finished/${document.id}`)
                    });
            })
            .catch(err => console.log(err))
            .finally(() => console.log('Proceso de compra finalizado'));
    }

    return (
        <div>
            {   loading ? <LoadingPage /> :
                cart.length > 0 ?
                    <Container>
                        {
                            !isValidClientInfo() &&
                            <Row>
                                <Col md="12">
                                    <Alert variant="info">
                                        No se podrá completar el proceso de compra si es que no rellenas con tu información personal
                                    </Alert>
                                </Col>
                            </Row>
                        }
                        <Row className="border-0 cart-button-group">
                            <Col md="8">
                                <div className="text-left">
                                    <p className="h1">Carro de compras</p>
                                </div>
                            </Col>
                            <Col md="4">
                                <div className="text-right">
                                    <Button variant="danger" className="header-button" onClick={clearCart}>
                                        Limpiar Carro
                                    </Button>
                                    <Button variant="primary" className="header-button" onClick={generateOrder} disabled={!isValidClientInfo()}>
                                        Finalizar compra
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                        <Row className="border-0 cart-button-group">
                            {
                                formInputs.map((input, index) => 
                                    <Col key={index} md={input.size}>
                                        <Form.Group controlId={input.title}>
                                            <Form.Control 
                                                type="text"
                                                placeholder={input.title}
                                                value={input.state}
                                                onChange={input.onChange}
                                            />
                                        </Form.Group>
                                    </Col>
                                )
                            }
                        </Row>
                        <Row>
                            <Col md="10">
                                {   
                                    cart.map(cartElement => <CartElement key={cartElement.item?.id} element={cartElement} removeElement={removeItemToCart} />) 
                                }
                            </Col>
                            <Col md="2">
                                <h4>Total: ${getTotalCart()}</h4>
                            </Col>
                        </Row>
                    </Container>:
                    <ResultPage
                        titleText="Carro de compras vacío"
                        buttonText="Volver al catálogo"
                        redirectPath="/"
                     />
            }
        </div>
        
    )
}

export default Cart