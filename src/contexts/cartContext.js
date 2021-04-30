import React, { useState } from 'react'

export const CartRawContext = React.createContext([])

export const CartContext = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItemToCart = (item, qty) => {
        if (!isInCart(item.id)) {
            setCart([...cart, { item: item, quantity: qty}])
        } else {
            const itemIndex = cart.findIndex((el => el.item.id === item.id));
            cart[itemIndex].quantity += qty;
        }
    }

    const removeItemToCart = (itemID) => {
        setCart(cart.filter(el => el.item.id !== itemID))
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemID) => Boolean(cart.find(el => el.item.id === itemID));

    const getTotalCart = () => cart.reduce((sum, el) => sum + (el.item.price * el.quantity), 0); 

    return (
        <CartRawContext.Provider value={{ cart, addItemToCart, removeItemToCart, clearCart, isInCart, getTotalCart }}>
            {children}
        </CartRawContext.Provider>
    )
}


