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
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [emailConfirmation, setEmailConfirmation] = useState('');
    const [loading, setLoading] = useState(false)

    const { cart, clearCart, removeItemToCart, getTotalCart } = useContext(CartRawContext)

    const history = useHistory()

    const formInputs = [
        {
            title: 'Nombre',
            state: firstName,
            onChange: e => setFirstName(e.target.value),
            size: 4
        },
        {
            title: 'Apellidos',
            state: lastName,
            onChange: e => setLastName(e.target.value),
            size: 4
        },
        {
            title: 'Teléfono',
            state: phone,
            onChange: e => setPhone(e.target.value),
            size: 4
        },
        {
            title: 'E-Mail',
            state: email,
            onChange: e => setEmail(e.target.value),
            size: 6
        },
        {
            title: 'Confirmación E-Mail',
            state: emailConfirmation,
            onChange: e => setEmailConfirmation(e.target.value),
            size: 6
        }
    ]

    const generateAlert = (msg, variant) => <Row>
                                                <Col md="12">
                                                    <Alert variant={variant}>{ msg }</Alert>
                                                </Col>
                                            </Row>

    const isEmptyClientInfo = () => {
        const hasFirstName = (firstName && firstName !== '');
        const hasLastName = (lastName && lastName !== '');
        const hasPhone = (phone && phone !== '');
        const hasEmail = (email && email !== '');
        const hasConfirmationEmail = (emailConfirmation && emailConfirmation !== '');
        return hasFirstName && hasPhone && hasLastName && hasEmail && hasConfirmationEmail;
    }

    const isEmailConfirmated = () => email === emailConfirmation;

    const isValidClientInfo = () => isEmptyClientInfo() && isEmailConfirmated();

    const generateOrder = () => {
        setLoading(true);
        let order = {};
        const name = `${firstName} ${lastName}`

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
                triggerMassiveStockUpdate(cart)
                    .then(() => {
                        clearCart();
                        setLoading(false);
                    })
                    .catch(err => console.log(err))
                    .finally(() => {
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
                        { !isEmptyClientInfo() && generateAlert('No se podrá completar el proceso de compra si es que no rellenas con tu información personal', 'info') }
                        { !isEmailConfirmated() && generateAlert('El e-mail de confirmación no es igual al e-mail del cliente ingresado', 'danger') }
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
                                { cart.map(cartElement => <CartElement key={cartElement.item?.id} element={cartElement} removeElement={removeItemToCart} />) }
                            </Col>
                            <Col md="2">
                                <h4>Total: ${getTotalCart()}</h4>
                            </Col>
                        </Row>
                    </Container>:
                    <ResultPage
                        titleText="Carro de compras vacío"
                        buttonText="Volver al catálogo"
                        redirectPath="/category"
                     />
            }
        </div>
        
    )
}

export default Cart