import { Link } from 'react-router-dom'
import './InvalidCart.css'

export function InvalidCart() {
    return (
        <section className='invalid-cart'>
            <p> Para poder ver tu carrito, necesitas iniciar sesión </p>
            <Link to={'/login'}>Iniciar sesión</Link>
            <Link to={'/register'}>Registrase</Link>
        </section>
    )
}