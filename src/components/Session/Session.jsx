import './Session.css'
import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/authContext"

export function Session() {

    const { user, logOut } = useContext(AuthContext)

    if (user !== null) return <div>
        <span>{user.displayName}</span>
        <button onClick={()=> logOut()}>logout</button>
    </div>

    return (
        <>
            <Link className='btnLogin' to={'/login'}>Iniciar sesión</Link>
            <Link className='btnRegister' to={'/register'}>Registrarse</Link>
        </>
    )
}