import React, { useState } from 'react'

export const CartRawContext = React.createContext([])

export const CartContext = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItemToCart = (item, qty) => {
        if (!isInCart(item.id)) {
            console.log(`Item con ID ${item.id} se agregará al carro! Cantidad ${qty}`)
            setCart([...cart, { item: item, quantity: qty}])
        } else {
            console.log(`Item con ID ${item.id} ya se encuentra en el carro! Editando y agregando ${qty} items màs...`)
            const itemIndex = cart.findIndex((el => el.item.id === item.id));
            cart[itemIndex].quantity += qty;
        }
    }

    const removeItemToCart = (itemID) => {
        console.log(`Eliminando Item con ID ${itemID} del carro...`)
        setCart(cart.filter(el => el.item.id !== itemID))
    }

    const clearCart = () => {
        console.log('Limpiando carro...')
        setCart([])
    }

    const isInCart = (itemID) => Boolean(cart.find(el => el.item.id === itemID));

    return (
        <CartRawContext.Provider value={{ cart, addItemToCart, removeItemToCart, clearCart, isInCart }}>
            {children}
        </CartRawContext.Provider>
    )
}


