import { useContext, useEffect, useState } from 'react'
import './CartWidget.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/cartContext'
import { AuthContext } from '../../context/authContext'

export function CartWidget() {

    const { getCart } = useContext(CartContext)
    const { user } = useContext(AuthContext)
    const [total, setTotal] = useState(null)

    useEffect(() => {
        setTotal()
    }, [user])

    return (
        <Link to={'/cart'} className="shopping-cart">
            <i className="fa-solid fa-cart-shopping"></i>
            {user && total && <span>{total}</span>}
        </Link>
    )
}