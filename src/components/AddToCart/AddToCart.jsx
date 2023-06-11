import { useContext, useState } from 'react'
import './AddToCart.css'
import { CartContext } from '../../context/cartContext'
import { AuthContext } from '../../context/authContext'
import { Link, useNavigate } from 'react-router-dom'
import { QuantityCount } from '../QuantityCount/QuantityCount'

export function AddToCart({ dataProduct }) {

    const { addToCart, updateCartWidget } = useContext(CartContext)
    const { user } = useContext(AuthContext)

    const [quantity, setQuantity] = useState(1)
    const [addToCartConfirmed, setAddToCartConfirmed] = useState(false)

    const { available_quantity, id } = dataProduct

    const navigate = useNavigate()

    const changeCount = e => {
        e ?
            quantity < available_quantity && setQuantity(quantity + 1) :
            available_quantity !== 0 && quantity > 1 && setQuantity(quantity - 1)
    }

    const submitAddToCart = (e) => {
        console.log(e.type)
        e.preventDefault()
        addToCart(quantity, id)
            .then(() => {
                updateCartWidget()
                e.type === "click" ? navigate('/checkout') : setAddToCartConfirmed(true)
            })
    }

    return (
        user ?
            <form className="add-to-cart" onSubmit={(e) => submitAddToCart(e)} >
                <QuantityCount changeCount={changeCount} quantity={quantity} />
                <span>{available_quantity} en stock</span>
                {addToCartConfirmed ?
                    <div className='addToCartTrue'>
                        <button type="button" onClick={() => setAddToCartConfirmed(false)}><i className="fa-solid fa-angle-left"></i></button>
                        <Link to={'/cart'}>Ver carrito</Link>
                    </div>
                    :
                    <>
                        <button type="submit">Agregar al carrito</button>
                        <Link onClick={(e) => submitAddToCart(e)} to={'/checkout'} className='btn-buy'>Comprar</Link>
                    </>
                }
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