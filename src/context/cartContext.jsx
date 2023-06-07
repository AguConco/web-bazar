import { createContext, useContext, useState } from "react";
import { AuthContext } from "./authContext";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const { user } = useContext(AuthContext)

    // const urlHost = 'https://panel-control-bazar.000webhostapp.com/backend/'
    const urlHost = 'http://localhost:80/Bazar-Backend/'

    const callServer = async (urlFile, method, body) => {
        return await fetch(`${urlHost}${urlFile}`, { method, body })
    }

    const addToCart = (quantity, productId) => {
        const urlFile = `cart.php`
        const dataCart = new FormData()
        dataCart.append('quantity', quantity)
        dataCart.append('uid', user.uid)
        dataCart.append('productId', productId)

        callServer(urlFile, 'POST', dataCart)
            .finally(() => getCart())
    }

    const deleteProductCart = async (productId) => {
        const urlFile = `deleteCart.php`
        const dataCart = new FormData()
        dataCart.append('uid', user.uid)
        dataCart.append('productId', productId)

        return await callServer(urlFile, 'POST', dataCart)

    }

    const updateCart = () => {

    }

    const clearCart = () => {

    }

    const getCart = async () => {
        const urlFile = `cart.php?uid=${user.uid}`
        return await callServer(urlFile, 'GET')
    }


    return <CartContext.Provider value={{
        addToCart,
        deleteProductCart,
        updateCart,
        getCart,
        clearCart
    }}>{children}</CartContext.Provider>
}