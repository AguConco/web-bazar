import { useState } from 'react'
import './AddToCart.css'

export function AddToCart({ stock }) {

    const [count, setCount] = useState(1)

    const changeCount = e => {
        e ?
            count < stock && setCount(count + 1) :
            stock !== 0 && count > 1 && setCount(count - 1)
    }

    return (
        <form className="add-to-cart">
            <button onClick={() => changeCount(false)} type='button'>-</button>
            <input type="text" disabled value={count} />
            <button onClick={() => changeCount(true)} type='button'>+</button>
            <span>{stock} en stock</span>
            <button type="submit">Agregar al carrito</button>
            <button type="submit">Comprar</button>
        </form>
    )
}