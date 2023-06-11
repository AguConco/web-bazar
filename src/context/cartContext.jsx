import { createContext, useContext, useState } from "react";
import { AuthContext } from "./authContext";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const { user } = useContext(AuthContext)
    const [totalProductsCart, setTotalProductsCart] = useState(null)
    const [stateCart, setStateCart] = useState(false)

    // const urlHost = 'https://panel-control-bazar.000webhostapp.com/backend/'
    const urlHost = 'http://localhost:80/Bazar-Backend/'

    const callServer = async (urlFile, method, body) => {
        return await fetch(`${urlHost}${urlFile}`, { method, body })
    }

    const addToCart = async (quantity, productId) => {
        const urlFile = `cart.php`
        const dataCart = new FormData()
        dataCart.append('quantity', quantity)
        dataCart.append('uid', user.uid)
        dataCart.append('productId', productId)

        return await callServer(urlFile, 'POST', dataCart)
    }

    const deleteProductCart = async (productId) => {
        const urlFile = `deleteCart.php`
        const dataCart = new FormData()
        dataCart.append('uid', user.uid)
        dataCart.append('productId', productId)

        return await callServer(urlFile, 'POST', dataCart)

    }

    const updateCart = async (productId, quantity) => {
        const urlFile = `updateQuantityProductCart.php`
        const dataCart = new FormData()

        dataCart.append('uid', user.uid)
        dataCart.append('productId', productId)
        dataCart.append('quantity', quantity)

        return await callServer(urlFile, 'POST', dataCart)
    }

    const getCart = async () => {
        const urlFile = `cart.php?uid=${user.uid}`
        return await callServer(urlFile, 'GET')
    }

    const updateCartWidget = () => {
        const urlFile = `cartWidget.php?uid=${user.uid}`
        callServer(urlFile, 'GET')
            .then(e => e.json())
            .then(e => setTotalProductsCart(e.total_products))
    }

    return <CartContext.Provider value={{
        addToCart,
        deleteProductCart,
        updateCart,
        getCart,
        updateCartWidget,
        setStateCart,
        stateCart,
        totalProductsCart
    }}>{children}</CartContext.Provider>
}