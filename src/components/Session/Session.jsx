import './Session.css'
import { useContext, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/authContext"
import noPhoto from '../../assets/img/no_photo.jpg'

export function Session() {

    document.onclick = e => {
        if (menuRef.current && !menuRef.current.contains(e.target)) setVisible(false)
    }

    const { user, logOut } = useContext(AuthContext)
    const [visible, setVisible] = useState(false)
    const menuRef = useRef()

    if (user === null) return (
        <>
            <Link className='btn-login' to={'/login'}>Iniciar sesión</Link>
            <Link className='btn-register' to={'/register'}>Registrarse</Link>
        </>
    )

    return (
        <div ref={menuRef} >
            <button className='photo-profile' onClick={() => setVisible(!visible)}>
                <img src={user.photoURL || noPhoto} alt="foto de perfil" />
            </button>
            {visible &&
                <div className='user-menu'>
                    <div className="user-info">
                        <h3>{user.displayName}</h3>
                        <span>{user.email}</span>
                    </div>
                    <ul onClick={() => setVisible(false)}>
                        <li><Link to={'/profile'}><i className="fa-solid fa-user-large"></i> Tu perfil</Link></li>
                        <li><Link to={'/my-purchases'}><i className="fa-solid fa-bag-shopping"></i> Mis pedidos</Link></li>
                    </ul>
                    <button className='btn-logout' onClick={() => {
                        setVisible(false)
                        logOut()
                    }}>
                        <i className="fa-solid fa-right-from-bracket"></i>
                        Logout
                    </button>
                </div>
            }
        </div>
    )
}