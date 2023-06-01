import { useContext, useEffect, useState } from 'react'
import './PasswordReset.css'
import { AuthContext } from '../../context/authContext'
import { Link, useNavigate } from 'react-router-dom'

export function PasswordReset() {

    const { passwordReset, user } = useContext(AuthContext)

    const [email, setEmail] = useState(null)
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)

    const navigate = useNavigate()

    const submitPasswordReset = (e) => {
        e.preventDefault()
        setError(null)
        setSuccess(null)
        email !== null ? passwordReset(email, setError, setSuccess) : setError('Completa todos los campos.')
    }

    useEffect(() => {
        document.title = 'Restaurar contraseña • Bazar Regalería'
        user !== null && navigate('/')
    }, [user])

    return (
        <section>
            <form onSubmit={e => submitPasswordReset(e)} className='form-password-reset'>
                <h1>Restaurar contraseña</h1>
                <p>Ingresa el correo eletrónico de la cuenta que quieres recuperar.</p>
                <input type="email" placeholder='Correo eletrónico' onKeyUp={({ target }) => setEmail(target.value)} />
                <span></span>
                <div className="container-btn-submit">
                    <button className='' type="submit">Enviar</button>
                </div>
                {success &&
                    <div>
                        <div className='success'>{success}</div>
                        <Link to={'/login'}> Iniciar sesión </Link>
                    </div>
                }
                {error &&
                    <div className='error'>{error}</div>
                }
            </form>
        </section>
    )
}