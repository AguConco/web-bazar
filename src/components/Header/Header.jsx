import './Header.css'
import { Searcher } from '../Searcher/Seacrcher'
import { NavBar } from '../NavBar/NavBar'
import { ShoppingCart } from '../ShoppingCart/ShoppingCart'
import { Link } from 'react-router-dom'
import { Session } from '../Session/Session'

export function Header() {
    return (
        <header>
            <div>
                <div className='headerTop'>
                    <Link to={'/'}><img src="" alt="logo" /></Link>
                    <div>
                        <ShoppingCart />
                        <Session />
                    </div>
                </div>
                <div className='headerBottom'>
                    <NavBar />
                    <Searcher />
                </div>
            </div>
        </header>
    )
} 