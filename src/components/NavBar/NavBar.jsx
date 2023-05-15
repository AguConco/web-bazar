import { useRef, useState } from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

export function NavBar() {

    document.onclick = e => {
        if (navRef.current && !navRef.current.contains(e.target)) setVisible(false)
    }

    const [visible, setVisible] = useState(false)
    const navRef = useRef()

    return (
        <nav ref={navRef} >
            <button onClick={()=>setVisible(!visible)}>Categorías <i className="fa-solid fa-angle-down"></i></button>
            {visible &&
                <ul onClick={()=>setVisible(false)}>
                    <li><Link to={'/category/cc'}>Cocina</Link></li>
                    <li><Link to={'/category/cr'}>Regalería</Link></li>
                    <li><Link to={'/category/cj'}>Juguetería</Link></li>
                    <li><Link to={'/category/cmt'}>Mates y termos</Link></li>
                    <li><Link to={'/category/clb'}>Limpieza y baño</Link></li>
                    <li><Link to={'/category/cv'}>Varios</Link></li>
                </ul>}
        </nav>
    )
}