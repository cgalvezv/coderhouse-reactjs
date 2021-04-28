import React, { useState } from 'react'
import { getOrdersByUserEmail } from '../../services';
import OrderList from '../../components/OrderList/OrderList';
import { LoadingPage } from '../../utils';
import { 
    Button,
    Col,
    Container, 
    InputGroup,
    FormControl,
    Form,
    Row
} from 'react-bootstrap';
import './OrderListContainer.css';

const OrderListContainer = () => {
    const [userEmail, setUserEmail] = useState('');
    const [nroOrderFiltered, setNroOrderFiltered] = useState('');
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(false)

    const getOrders = () => {
        setLoading(true);
        getOrdersByUserEmail(userEmail).get().then((querySnapshot) => {
            setOrders([...querySnapshot.docs.map((doc) => { return { id: doc.id, ...doc.data()}})])
        })
        .catch((err) => console.log(`Error finding orders ${JSON.stringify(err, null, 2)}`))
        .finally(() => setLoading(false))
    }

    return (
        <Container>
            <Form className="user-form_container">
                <h1>
                    Seguimiento de ordenes
                    <p className="lead">Ingrese email del usuario para conocer sus ordenes</p>
                </h1>
                <Form.Row className="align-items-center">
                    <Col md="10">
                        <Form.Label htmlFor="userMailControl" srOnly>
                            E-mail usuario
                        </Form.Label>
                        <InputGroup className="mb-2">
                            <InputGroup.Prepend>
                            <InputGroup.Text>@</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl 
                                id="userMailControl" 
                                placeholder="E-mail usuario" 
                                value={userEmail}
                                onChange={e => setUserEmail(e.target.value)}
                            />
                        </InputGroup>
                    </Col>
                    <Col md="2">
                        <Button className="mb-2" onClick={() => getOrders()}>
                            Obtener Ordenes
                        </Button>
                    </Col>
                </Form.Row>
            </Form>
            {   loading ? 
                    <LoadingPage /> :
                    orders.length > 0 &&
                        <>
                            <Row>
                                <Form className="user-form_container" as={Col} md="12">
                                    <Form.Row className="align-items-center">
                                        <Col md="12">
                                            <Form.Label htmlFor="filterControl" srOnly>
                                                Filtrar
                                            </Form.Label>
                                            <InputGroup className="mb-2">
                                                <InputGroup.Prepend>
                                                <InputGroup.Text>Filtro</InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <FormControl 
                                                    id="filterControl" 
                                                    placeholder="Ingrese número de orden para aplicar filtro"
                                                    value={nroOrderFiltered}
                                                    onChange={e => setNroOrderFiltered(e.target.value)}
                                                />
                                            </InputGroup>
                                        </Col>
                                    </Form.Row>
                                </Form>
                            </Row>
                            <OrderList orders={orders.filter(order => order.id.includes(nroOrderFiltered))} />
                        </>
            }
        </Container>
    )
}

export default OrderListContainer
