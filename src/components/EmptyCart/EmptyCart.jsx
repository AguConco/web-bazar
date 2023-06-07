import { Link } from 'react-router-dom'
import './EmptyCart.css'

export function EmptyCart() {
    return (
        <section className='empty-cart'>
            <h4>¡Tu carrito está vacío!</h4>
            <p>¿Qué estas esperando para agregar lo que más te gusta?</p>
            <Link to={'/'}>Volver al inicio</Link>
        </section>
    )
}