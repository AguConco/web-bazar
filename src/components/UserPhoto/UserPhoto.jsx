import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context/authContext"
import noPhoto from "../../assets/img/no_photo.jpg"
import './UserPhoto.css'

export function UserPhoto() {

    const { user, updateUserPhoto, deleteUserPhoto } = useContext(AuthContext)
    const [userPhoto, setUserPhoto] = useState()
    const [stateUpdate, setStateUpdate] = useState(false)

    useEffect(() => {
        setStateUpdate(false)
        document.title = 'Mi perfil • Bazar Regalería'
        user !== null && setUserPhoto(user.photoURL || noPhoto)
    }, [stateUpdate])

    return (
        <div className="user-photo">
            <img src={userPhoto} alt="foto de perfil" />
            <div className="edit-user-photo">
                <button className="update-user-photo">
                    <input type="file" onChange={({ target }) => updateUserPhoto({ uid: user.uid, photo: target.files[0] }, setStateUpdate)} accept="image/png, image/jpeg, image/webp" />
                    <span> Subir foto </span>
                </button>
                <button className="delete-user-photo" onClick={() => deleteUserPhoto(setStateUpdate)}>
                    <span> Borrar Foto </span>
                </button>
            </div>
        </div>
    )
}