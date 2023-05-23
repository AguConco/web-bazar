import { useContext, useEffect } from "react"
import { AuthContext } from "../../context/authContext"
import { Loading } from "../Loading/Loading"
import './Profile.css'
import { UserPhoto } from "../UserPhoto/UserPhoto"
import { Link } from "react-router-dom"
import { UserData } from "../UserData/UserData"

export function Profile() {

    const { user, logOut } = useContext(AuthContext)

    useEffect(() => {
        document.title = 'Mi perfil • Bazar Regalería'
    }, [])

    return (
        user ?
            <section className="profile">
                <div>
                    <div className="profile-sections">
                        <UserPhoto />
                        <h1 className="profile-user-name">{user.displayName}</h1>
                        <span className="profile-user-email">{user.email}</span>
                    </div>
                    <div className="profile-sections">
                        <ul className="user-nav">
                            <li><Link to={'/my-purchases'}><i className="fa-solid fa-bag-shopping"></i> Mis pedidos </Link></li>
                            <li><Link to={'/help'}><i className="fa-solid fa-circle-question"></i> Ayuda </Link></li>
                            <li><button onClick={() => logOut()}><i className="fa-solid fa-right-from-bracket"></i> Cerrar sesión </button></li>
                        </ul>
                    </div>
                </div>
                <UserData />
            </section>
            :
            <Loading />
    )
}