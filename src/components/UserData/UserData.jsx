import { useContext } from 'react'
import './UserData.css'
import { AuthContext } from '../../context/authContext'
import { Link } from 'react-router-dom'

export function UserData() {

    const { user } = useContext(AuthContext)

    return (
        <div className='userData'>
            <div>
                <h2>Tus datos</h2>
            </div>
            <div className="profile-sections type-buyer">
                <div>
                    <h4>Tipo de comprador</h4>
                    <p>En configración podras cambiar tu cuenta a comprador mayorista. Este cambio es permanente.</p>
                </div>
                <span className={user?.type || "public"}>Mayorista</span>
            </div>
            <div className="profile-sections address">
                <h4>Dirección</h4>
                <p>Esta información se utiliza para los envios. Podrás modificarla en configuración.</p>
                {user?.address ?
                    <div>
                        <div className='address-data'>
                            <h5> {user.address} - {user.department}</h5>
                            <span> Código postal: {user.postcode} - {user.location} - {user.province} </span>
                        </div>
                        <Link to={'/add-address'} className='add-data'>Cambiar dirección</Link>
                    </div>
                    :
                    <Link to={'/add-address'} className='add-data'>Agregar dirección</Link>
                }
            </div>
            <div className="profile-sections phone">
                <h4>Teléfono</h4>
                <p>Esta información se utiliza para contactarnos por si hay algún inconveniente en su compra o envio.</p>
                {user?.cellphone ?
                    <div className='phone-data'>
                        <h5> {user.cellphone} </h5>
                    </div>
                    :
                    <Link to={'/add-phone'} className='add-data'>Agregar teléfono</Link>
                }
            </div>
        </div>
    )
}