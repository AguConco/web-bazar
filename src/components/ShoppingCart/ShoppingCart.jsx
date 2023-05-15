import { useEffect } from 'react'
import './ShoppingCart.css'
import { Link } from 'react-router-dom'

export function ShoppingCart() {

    useEffect(()=> {
        
    },[])

    return (
        <Link to={'/cart'} className="shopping-cart">
            <i className="fa-solid fa-cart-shopping"></i>
            {/* <span className="countItemShoppingCart">15</span> */}
        </Link>
    )
}