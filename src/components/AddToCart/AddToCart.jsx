import { useContext, useState } from 'react'
import './AddToCart.css'
import { CartContext } from '../../context/cartContext'
import { AuthContext } from '../../context/authContext'
import { Link } from 'react-router-dom'
import { QuantityCount } from '../QuantityCount/QuantityCount'

export function AddToCart({ dataProduct }) {

    const { addToCart } = useContext(CartContext)
    const { user } = useContext(AuthContext)

    const [quantity, setQuantity] = useState(1)

    const { available_quantity, id } = dataProduct

    const changeCount = e => {
        e ?
            quantity < available_quantity && setQuantity(quantity + 1) :
            available_quantity !== 0 && quantity > 1 && setQuantity(quantity - 1)
    }

    const submitAddToCart = (e) => {
        e.preventDefault()
        addToCart(quantity, id)
    }

    return (
        user ?
            <form className="add-to-cart" onSubmit={(e) => submitAddToCart(e)} >
                <QuantityCount changeCount={changeCount} quantity={quantity}/>
                <span>{available_quantity} en stock</span>
                <button type="submit">Agregar al carrito</button>
                <button type="submit">Comprar</button>
            </form>
            :
            <div className='no-user-add-to-cart'>
                <p>Inicia sesión para poder agregar productos a tu carrito.</p>
                <div>
                    <Link to={'/login'}>Iniciar sesión</Link>
                    <Link to={'/register'}>Registrarse</Link>
                </div>
            </div>
    )
}