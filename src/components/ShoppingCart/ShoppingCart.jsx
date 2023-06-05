import { useContext, useEffect, useState } from 'react'
import './ShoppingCart.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/cartContext'
import { AuthContext } from '../../context/authContext'

export function ShoppingCart() {

    const { totalQuantity, getCart } = useContext(CartContext)
    const { user } = useContext(AuthContext)
    const [total, setTotal] = useState(null)

    useEffect(() => {
        setTotal(totalQuantity)
    }, [totalQuantity, user])

    return (
        <Link to={'/cart'} className="shopping-cart">
            <i className="fa-solid fa-cart-shopping"></i>
            {user && total && <span className="countItemShoppingCart">{total}</span>}
        </Link>
    )
}