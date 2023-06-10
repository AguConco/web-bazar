import './Header.css'
import { Searcher } from '../Searcher/Seacrcher'
import { NavBar } from '../NavBar/NavBar'
import { Link } from 'react-router-dom'
import { Session } from '../Session/Session'
import { CartWidget } from '../CartWidget/CartWidget'

export function Header() {
    return (
        <header>
            <div className='header-top'>
                <div >
                    <Link className='logo' to={'/'} title='Página principal de Bazar & Regalería'>
                        {/* <img src="" alt="logo" /> */}
                        B&R
                    </Link>
                </div>
                <Searcher />
                <div>
                    <CartWidget />
                    <Session />
                </div>
            </div>
            <NavBar />
        </header>
    )
} 