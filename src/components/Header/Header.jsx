import './Header.css'
import { Searcher } from '../Searcher/Seacrcher'
import { NavBar } from '../NavBar/NavBar'
import { ShoppingCart } from '../ShoppingCart/ShoppingCart'
import { Link } from 'react-router-dom'

export function Header() {
    return (
        <header>
            <div>
                <div className='headerSectionTop'>
                    <Link to={'/'}><img src="" alt="logo" /></Link>
                    <div>
                        <ShoppingCart />
                        <Link to={'/login'}>Iniciar sesión</Link>  
                        <Link to={'/register'}>Registrarse</Link>
                    </div>
                </div>
                <div className='headerSectionBottom'>
                    <NavBar />
                    <Searcher />
                </div>
            </div>
        </header>
    )
} 