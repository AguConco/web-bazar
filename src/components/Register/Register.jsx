import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/authContext'
import { Link, useNavigate } from 'react-router-dom'
import facebook from '../../assets/img/facebook.png'
import google from '../../assets/img/google.png'
import { InputPassword } from '../InputPassword/InputPassword'

export function Register() {

    const { user, register, loginWhitGoogle, loginWhitFacebook } = useContext(AuthContext)
    const [error, setError] = useState(null)
    const [nameAndLastname, setNameAndLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const submitRegister = e => {
        e.preventDefault()
        setError(null)

        if (nameAndLastname === '' || email === '' || password === '') {
            setError('Completa todos los campos.')
            return false
        }

        if (validateNameAndLastname() && validateEmail() && validatePassword()) {
            register({
                name: nameAndLastname.replace(/\b\w/g, (l) => l.toUpperCase()),
                email,
                password
            }, setError)
        }
    }

    const validateNameAndLastname = () => {
        if (/^[a-zA-Z ]+$/.test(nameAndLastname)) {
            setError(null)
            return true
        } else {
            setError('El nombre no debe contener números ni símbolos.')
            return false
        }
    }

    const validateEmail = () => {
        if (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            setError(null)
            return true
        } else {
            setError('La dirección de correo no tiene el formato requerido.')
            return false
        }

    }

    const validatePassword = () => {
        if (password.length >= 8) {
            setError(null)
            return true
        } else {
            setError('La contraseña debe contener 8 o más caracteres.')
            return false
        }

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
                    <input onKeyUp={({ target }) => setNameAndLastname(target.value.trim())} type="text" autoComplete="off" placeholder='Nombre y apellido' />
                </div>
                <div>
                    <input onKeyUp={({ target }) => setEmail(target.value.trim())} type="email" autoComplete="off" placeholder='Correo electrónico' />
                </div>
                <div>
                    <InputPassword setPassword={setPassword} setError={setError} />
                </div>
                <button type="submit">Registrarse</button>
                <span>¿Ya estás registrado? <Link to={'/login'}>Iniciar sesión</Link></span>
            </form>
            {error && <span className='error'> {error} </span>}
        </section>
    )
}