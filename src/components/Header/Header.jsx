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
                <div>
                    <Link to={'/'}>
                        {/* <img src="" alt="logo" /> */}
                        BR
                    </Link>
                    <NavBar />
                </div>
                <Searcher />
                <div>
                    <ShoppingCart />
                    <Session />
                </div>
            </div>
        </header>
    )
} 