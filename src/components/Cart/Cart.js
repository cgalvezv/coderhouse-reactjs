import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { addOrder, triggerMassiveStockUpdate } from '../../services';
import { CartRawContext } from "../../contexts/cartContext";
import CartElement from '../CartElement/CartElement';
import { ResultPage, LoadingPage } from '../../utils';
import './Cart.css'

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
                    <div className="container">
                        {
                            !isValidClientInfo() &&
                            <div className="row">
                                <div className="col-md-12">    
                                    <div className="alert alert-info" role="alert">
                                        No se podrá completar el proceso de compra si es que no rellenas con tu información personal
                                    </div>
                                </div>
                            </div>
                        }
                        <div className="row border-0 cart-button-group">
                            <div className="col-md-8">
                                <div className="text-left">
                                    <p className="h1">Carro de compras</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="text-right">
                                    <button className="btn btn-danger header-button" onClick={clearCart}>
                                        Limpiar Carro
                                    </button>
                                    <button className="btn btn-primary header-button" onClick={generateOrder} disabled={!isValidClientInfo()}>
                                        Finalizar compra
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="row border-0 cart-button-group">
                            {
                                formInputs.map(input => 
                                    <div className={`col-md-${input.size}`}>
                                        <input type="text"
                                            className="form-control"
                                            placeholder={input.title}
                                            value={input.state}
                                            onChange={input.onChange}
                                            aria-label={input.title} />
                                    </div>
                                )
                            }
                        </div>
                        <div className="row">
                            <div className="col-md-10">
                                {   
                                    cart.map(cartElement =>  <CartElement element={cartElement} removeElement={removeItemToCart} />) 
                                }
                            </div>
                            <div className="col-md-2">
                                <h4>Total: ${getTotalCart()}</h4>
                            </div>
                        </div>
                    </div> :
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