import { useEffect } from 'react'
import './ShoppingCart.css'
import { Link } from 'react-router-dom'

export function ShoppingCart() {

    useEffect(()=> {
        
    },[])

    return (
        <Link to={'/cart'} className="shoppingCart">
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="countItemShoppingCart">45</span>
        </Link>
    )
}