import { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'
import './LoginRegister.css'
import facebook from '../../assets/img/facebook.png'
import google from '../../assets/img/google.png'

export function Login() {

    const { user, loginWhitGoogle, loginWhitFacebook } = useContext(AuthContext)
    const [error, setError] = useState()

    const navigate = useNavigate()

    useEffect(() => {
        document.title = 'Iniciar sesión • Bazar Regalería'
        user !== null && navigate('/')
    }, [user])

    return (
        <section className='sectionLogin'>
            <h1>Iniciar sesión</h1>
            <div>
                <button className='btnAuth' onClick={() => loginWhitGoogle()}><img src={google} /> Iniciar sesión con Google</button>
                <button className='btnAuth' onClick={() => loginWhitFacebook()}><img src={facebook} /> Iniciar seión con Facebook</button>
            </div>
            <div className='division'>
                <div></div>
                <span>o</span>
                <div></div>
            </div>
            <form onSubmit={e => { }} className="formLogin">
                <div>
                    <input onKeyUp={e => {
                        // setError('')
                        // setCorreo(e.target.value.trim())
                    }} type="email" autoComplete="off" placeholder='Correo electrónico' />
                </div>
                <div>
                    <input onKeyUp={e => {
                        // setError('')
                        // setContrasena(e.target.value.trim())
                    }} type="password" placeholder='Contraseña' />
                    <Link to={'/password-reset'} className='password-reset'>¿Olvidaste tu contraseña?</Link>
                </div>
                {error && <span> {error} </span>}
                <button type="submit">Iniciar sesión</button>
                <span>¿No estás registrado? <Link to={'/register'}>Registrarse</Link> </span>
            </form>
        </section>
    )
}