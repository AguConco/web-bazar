import { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'
import './LoginRegister.css'
import facebook from '../../assets/img/facebook.png'
import google from '../../assets/img/google.png'

export function Login() {

    const { user, loginWhitGoogle, loginWhitFacebook, login } = useContext(AuthContext)
    const [error, setError] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const navigate = useNavigate()

    const submitLogin = e => {
        e.preventDefault()
        setError('')
        
        if (email !== '' && password !== '')
            login({ email, password }, setError)
        else
            setError('Completa todos los campos.')

    }

    useEffect(() => {
        document.title = 'Iniciar sesión • Bazar Regalería'
        user !== null && navigate('/')
    }, [user])

    return (
        <section className='sectionLogin'>
            <h1>Iniciar sesión</h1>
            <div>
                <button className='btnAuth' onClick={() => loginWhitGoogle(setError)}><img src={google} /> Iniciar sesión con Google</button>
                <button className='btnAuth' onClick={() => loginWhitFacebook(setError)}><img src={facebook} /> Iniciar seión con Facebook</button>
            </div>
            <div className='division'>
                <div></div>
                <span>o</span>
                <div></div>
            </div>
            <form onSubmit={e => submitLogin(e)} className="formLogin">
                <div>
                    <input onKeyUp={({ target }) => setEmail(target.value.trim())} type="email" autoComplete="off" placeholder='Correo electrónico' />
                </div>
                <div>
                    <input onKeyUp={({ target }) => setPassword(target.value.trim())} type="password" placeholder='Contraseña' />
                    <Link to={'/password-reset'} className='password-reset'>¿Olvidaste tu contraseña?</Link>
                </div>
                <button type="submit">Iniciar sesión</button>
                <span>¿No estás registrado? <Link to={'/register'}>Registrarse</Link> </span>
            </form>
            {error && <span className='error'> {error} </span>}
        </section>
    )
}