import { useContext } from 'react'
import { Loading } from '../Loading/Loading'
import './AddPhone.css'
import { AuthContext } from '../../context/authContext'
import { Link } from 'react-router-dom'

export function AddPhone() {

    const { user } = useContext(AuthContext)

    // El formulario va a ser otro componente el state error va en ese componente

    return (
        user ?
            <section className='section-edit-user-data'>
                <div>
                    <Link to={'/profile'}><i className="fa-solid fa-angle-left"></i> Volver a tu perfil</Link>
                    <h1>Agrega un número de teléfono</h1>
                </div >
                <div className='profile-sections edit-data-phone'>
                    <h4>Nuevo teléfono</h4>
                    <p>Si ya tienes un número guardado, este se modificará.</p>
                    <form>
                        <input type="text" placeholder='Teléfono' />
                        <div>
                            <button type="submit" className='btn-save-address'>Siguiente</button>
                        </div>
                    </form>
                </div>
            </section >
            :
            <Loading />
    )
}