import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { CartRawContext } from "../../contexts/cartContext";
import { addOrder, triggerMassiveStockUpdate } from '../../db/firebase'
import ResultPage from '../../pages/ResultPage/ResultPage'
import './Cart.css'

const Cart = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const { cart, clearCart, removeItemToCart, getTotalCart } = useContext(CartRawContext)

    const history = useHistory()

    const generateOrder = () => {
        let order = {};

        order.buyer = {name, email, phone};
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
                        clearCart()
                    })
                    .catch(err => console.log(err))
                    .finally(() => {
                        console.log(`Proceso de actualización masiva de stock finalizada\nRedirigiendo al home...`)
                        history.push('/cart/finished')
                    });
            })
            .catch(err => console.log(err))
            .finally(() => console.log('Proceso de compra finalizado'));
    }

    const isValidClientInfo = () => (name && name !== '') && (phone && phone !== '') && (email && email !== '')

    return (
        <div>
            {   
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
                            <div className="col-md-5">
                                <input type="text"
                                    className="form-control"
                                    placeholder="Nombre"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    aria-label="Nombre" />
                            </div>
                            <div className="col-md-4">
                                <input type="text" 
                                    className="form-control"
                                    placeholder="E-mail"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    aria-label="E-mail" />
                            </div>
                            <div className="col-md-3">
                                <input type="text"
                                    className="form-control"
                                    placeholder="Teléfono"
                                    value={phone}
                                    onChange={e => setPhone(e.target.value)}
                                    aria-label="Telefono" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-10">
                                {   
                                    cart.map((cartElement) => 
                                        <div key={`cart-item-key-${cartElement.item?.id}`} className="col-md-12">
                                            <div className="card mb-3 card-cart">
                                                <div className="row g-0">
                                                    <div className="col">
                                                        <button type="button" className="btn btn-ligth" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Eliminar item" onClick={() => removeItemToCart(cartElement.item?.id)}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <img src={cartElement.item?.imgUrl} className="img-fluid" alt={cartElement.item?.title} />
                                                    </div>
                                                    <div className="col-md-7">
                                                        <div className="card-body">
                                                            <h5 className="card-title">{ cartElement.item?.title }</h5>
                                                            <p className="card-text text-muted">{ cartElement.item?.subtitle }</p>
                                                            <p className="card-text">
                                                                <small className="text-muted">Precio Unitario: $ {cartElement.item?.price}</small>
                                                                <br></br>
                                                                <small className="text-muted">Cantidad: {cartElement.quantity}</small>
                                                            </p>
                                                            <p className="card-text">$ { cartElement.item?.price *  cartElement.quantity }</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ) 
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