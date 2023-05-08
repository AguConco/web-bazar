import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/authContext'
import { Link, useNavigate } from 'react-router-dom'
import facebook from '../../assets/img/facebook.png'
import google from '../../assets/img/google.png'

export function Register() {

    const { user, register, loginWhitGoogle, loginWhitFacebook } = useContext(AuthContext)
    const [error, setError] = useState(null)
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const navigate = useNavigate()

    const submitRegister = e => {
        e.preventDefault()
        register({ name, email, password }, setError)
    }

    useEffect(() => {
        document.title = 'Registrarse • Bazar Regalería'
        user !== null && navigate('/')
    }, [user])

    return (
        <section className='sectionRegister'>
            <h1>Registrarse</h1>
            <div>
                <button className='btnAuth' onClick={() => loginWhitGoogle(setError)}><img src={google} /> Registrarse con Google</button>
                <button className='btnAuth' onClick={() => loginWhitFacebook(setError)}><img src={facebook} /> Registrarse con Facebook</button>
            </div>
            <div className='division'>
                <div></div>
                <span>o</span>
                <div></div>
            </div>
            <form className='formRegister' onSubmit={e => submitRegister(e)}>
                <div>
                    <input onKeyUp={({ target }) => setName(target.value.trim())} type="text" autoComplete="off" placeholder='Nombre y apellido' />
                </div>
                <div>
                    <input onKeyUp={({ target }) => setEmail(target.value.trim())} type="email" autoComplete="off" placeholder='Correo electrónico' />
                </div>
                <div>
                    <input onKeyUp={({ target }) => setPassword(target.value.trim())} type="password" placeholder='Contraseña' />
                </div>
                {error && <span> {error} </span>}
                <button type="submit">Registrarse</button>
                <span>¿Ya estás registrado? <Link to={'/login'}>Iniciar sesión</Link></span>
            </form>
        </section>
    )
}