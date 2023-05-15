import { useContext, useEffect } from "react"
import { AuthContext } from "../../context/authContext"
import { Loading } from "../Loading/Loading"
import './Profile.css'
import { UserPhoto } from "../UserPhoto/UserPhoto"

export function Profile() {

    const { user } = useContext(AuthContext)

    useEffect(() => {
        document.title = 'Mi perfil • Bazar Regalería'
    }, [])

    return (
        user ?
            <section className="profile">
                <div>
                    <div className="user-data profile-sections">
                        <UserPhoto />
                        <h1>{user.displayName}</h1>
                        <span>{user.email}</span>
                    </div>
                    <div className="profile-sections">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div>
                        <h2>TUS DATOS </h2>
                    </div>
                    <div className="profile-sections type-buyer"><h4>Tipo de comprador</h4></div>
                    <div className="profile-sections address">
                        <h4>Dirección</h4>
                        <p>Esta información se utiliza para los envios.</p>
                    </div>
                </div>
            </section>
            :
            <Loading />
    )
}

{/* <button onClick={() => getLocation()}>Obtener Localización</button> */ }

const getLocation = () => {
    navigator.geolocation.getCurrentPosition(p => {
        const { latitude, longitude } = p.coords
        fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
            .then(e => e.json())
            .then(e => console.log(e))
    })
}