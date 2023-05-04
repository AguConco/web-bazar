import './NavBar.css'
import { Link } from 'react-router-dom'

export function NavBar() {
    return (
        <nav>
            <ul>
                <li><Link to={'/category/cc'}>Cocina</Link></li>
                <li><Link to={'/category/cr'}>Regalería</Link></li>
                <li><Link to={'/category/cj'}>Juguetería</Link></li>
                <li><Link to={'/category/cmt'}>Mates y termos</Link></li>
                <li><Link to={'/category/clb'}>Limpieza y baño</Link></li>
                <li><Link to={'/category/cv'}>Varios</Link></li>
            </ul>
        </nav>
    )
}