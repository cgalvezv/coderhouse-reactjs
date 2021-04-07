import React, { useState } from 'react'

export const CartRawContext = React.createContext([])

export const CartContext = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItemToCart = (item, qty) => {
        console.log(cart)
        if (!isInCart(item.id)) {
            cart.push({ item: item, quantity: qty})
        } else {
            console.log(`Item con ID ${item.id} ya se encuentra en el carro!`)
        }
    }

    const removeItemToCart = (itemID) => {
        console.log(`Eliminando Item con ID ${itemID} del carro...`)
        setCart(cart.filter(el => el.item.id !== itemID))
        console.log(cart)
    }

    const clearCart = () => {
        console.log('Limpiando carro...')
        setCart([])
        console.log(cart)
    }

    const isInCart = (itemID) => cart.filter(el => el.item.id === itemID).length > 0;

    return (
        <CartRawContext.Provider value={{ cart, addItemToCart, removeItemToCart, clearCart, isInCart }}>
            {children}
        </CartRawContext.Provider>
    )
}


