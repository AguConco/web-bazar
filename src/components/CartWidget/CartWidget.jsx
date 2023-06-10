import { useContext, useEffect, useState } from 'react'
import './CartWidget.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/cartContext'
import { AuthContext } from '../../context/authContext'
import shoppingCart from '../../assets/img/shopping-cart.png'

export function CartWidget() {

    const { updateCartWidget, totalProductsCart, stateCart } = useContext(CartContext)
    const { user } = useContext(AuthContext)

    useEffect(() => {
        user && updateCartWidget()
    }, [user, stateCart])

    return (
        <Link to={'/cart'} className="shopping-cart">
            <img src={shoppingCart} />
            {user && totalProductsCart && <span>{totalProductsCart}</span>}
        </Link>
    )
}