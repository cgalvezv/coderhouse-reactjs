import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartRawContext } from "../../contexts/cartContext";
import './Cart.css'

const Cart = () => {
    const { cart, clearCart, removeItemToCart, getTotalCart } = useContext(CartRawContext)
    return (
        <div>
            {   
                cart.length > 0 ?
                    <div className="container">
                        <div className="row border-0 cart-button-group">
                            <div className="col-md-8">
                            <p className="h1 text-center">Carro de compras</p>
                            </div>
                            <div className="col-md-4">
                                <div className="text-right">
                                    <button className="btn btn-danger" onClick={clearCart}>
                                        Limpiar Carro
                                    </button>
                                </div>
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
                    </div>:
                    <div className="container text-center">
                        <div className="no-cart_wrappper">
                            <h1 className="display-4">Carro de compras vacío</h1>
                            <br></br>
                            <Link className="btn btn-primary" to="/">Volver al catálogo</Link>
                        </div>
                    </div>
            }
        </div>
        
    )
}

export default Cart