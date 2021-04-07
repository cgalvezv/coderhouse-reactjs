import React, { useContext } from 'react'
import { CartRawContext } from "../../contexts/cartContext";
import './CartContainer.css'

const CartContainer = () => {
    const { cart, clearCart, removeItemToCart } = useContext(CartRawContext)
    return (
        <div className="container">
            <div className="row">
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button className="btn btn-danger" onClick={clearCart}>
                        Limpiar Carro
                    </button>
                </div>
            </div>
            <div className="row">
                {
                    cart.map((cartElement) => 
                        <div key={`cart-item-key-${cartElement.item?.id}`} className="card mb-3 cart-card">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <button type="button" className="btn-close" aria-label="Close" onClick={() => removeItemToCart(cartElement.item?.id)} />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{ cartElement.item?.title }</h5>
                                        <p className="card-text">{ cartElement.item?.price }</p>
                                        <p className="card-text"><small className="text-muted">Cantidad {cartElement.quantity}</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
        
    )
}

export default CartContainer
