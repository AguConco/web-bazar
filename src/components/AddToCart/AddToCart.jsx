import { useContext, useState } from 'react'
import './AddToCart.css'
import { CartContext } from '../../context/cartContext'

export function AddToCart({ dataProduct }) {

    const {addToCart} = useContext(CartContext)

    const [quantity, setQuantity] = useState(1)

    const { available_quantity, id } = dataProduct

    const changeCount = e => {
        e ?
            quantity < available_quantity && setQuantity(quantity + 1) :
            available_quantity !== 0 && quantity > 1 && setQuantity(quantity - 1)
    }

    const submitAddToCart = (e) => {
        e.preventDefault()
        addToCart(quantity,id)
    }

    return (
        <form className="add-to-cart" onSubmit={(e) => submitAddToCart(e)} >
            <button onClick={() => changeCount(false)} type='button'>-</button>
            <input type="text" disabled value={quantity} />
            <button onClick={() => changeCount(true)} type='button'>+</button>
            <span>{available_quantity} en stock</span>
            <button type="submit">Agregar al carrito</button>
            <button type="submit">Comprar</button>
        </form>
    )
}