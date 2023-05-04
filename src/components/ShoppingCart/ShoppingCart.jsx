import { useEffect } from 'react'
import './ShoppingCart.css'
import { Link } from 'react-router-dom'

export function ShoppingCart() {

    useEffect(()=> {
        
    },[])

    return (
        <Link to={'/cart'} className="shoppingCart">
            <i class="fa-solid fa-cart-shopping"></i>
            <span className="countItemShoppingCart">5</span>
        </Link>
    )
}