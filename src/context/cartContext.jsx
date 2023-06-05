import { createContext, useContext, useState } from "react";
import { AuthContext } from "./authContext";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const { user } = useContext(AuthContext)

    const [totalQuantity, setTotalQuantity] = useState(null)

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

    const removeToCart = () => {

    }

    const updateCart = () => {

    }

    const clearCart = () => {

    }

    const getCart = async () => {
        const urlFile = `cart.php?uid=${user.uid}`
        const response = await callServer(urlFile, 'GET')
        const cart = await response.json()
        setTotalQuantity(cart.total_quantity)
        return cart.products
    }
    

    return <CartContext.Provider value={{
        addToCart,
        removeToCart,
        updateCart,
        getCart,
        clearCart,
        totalQuantity
    }}>{children}</CartContext.Provider>
}