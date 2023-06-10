import { useContext, useEffect } from 'react'
import './AddAddress.css'
import { AuthContext } from '../../context/authContext'
import { Link } from 'react-router-dom'
import { Loading } from '../Loading/Loading'

export function AddAddress() {

    const { user } = useContext(AuthContext)

    useEffect(() => {
        document.title = 'Agregar dirección • Bazar Regalería'
    }, [])

    // El formulario va a ser otro componente el state error va en ese componente

    return (
        user ?
            <section className='section-edit-user-data'>
                <div>
                    <Link to={'/profile'}><i className="fa-solid fa-angle-left"></i> Volver a tu perfil</Link>
                    <h1>Agrega una dirección</h1>
                </div >
                <div className='profile-sections edit-data-address'>
                    <h4>Nueva dirección</h4>
                    <p>Si ya tienes una dirección guardad, esta se modificará.</p>
                    <form>
                        <div>
                            <input type="text" placeholder='Nombre Completo' />
                            <span>Tal cual como en tu DNI.</span>
                        </div>
                        <input type="text" placeholder='Código postal' />
                        <br />
                        <input type="text" placeholder='Provincia' />
                        <input type="text" placeholder='Localidad' />
                        <br />
                        <input type="text" placeholder='Calle / Avenida' />
                        <input type="text" placeholder='Número' />
                        <br />
                        <input type="text" placeholder='Piso / Departamento' />
                        <div className='container-btn'>
                            <button type="submit" className='btn-save-address'>Guardar</button>
                        </div>
                    </form>
                </div>
            </section >
            :
            <Loading />
    )
}