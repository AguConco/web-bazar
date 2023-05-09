import { useState } from "react";
import './InputPassword.css'

export function InputPassword({ setPassword }) {

    const [length, setLength] = useState(false)
    const [capitalLetter, setCapitalLetter] = useState(false)
    const [specialCharacters, setSpecialCharacters] = useState(false)
    const [number, setNumbre] = useState(false)
    const [visible, setVisible] = useState(false)

    const passwordSecurity = e => {
        e.length >= 8 ? setLength(true) : setLength(false);
        /[A-Z]/.test(e) ? setCapitalLetter(true) : setCapitalLetter(false);
        /\d/.test(e) ? setNumbre(true) : setNumbre(false);
        /[$&+,:;=?@#|'<>.^*()%!-]/.test(e) ? setSpecialCharacters(true) : setSpecialCharacters(false);

        setPassword(e)
    }

    return (
        <>
            <i onClick={() => setVisible(!visible)} className={visible ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"}></i>
            <input onKeyUp={({ target }) => passwordSecurity(target.value.trim())} type={visible ? "text" : "password"} placeholder='Contraseña' />
            <div className="pintsForSecurePassword">
                <div className='passwordNotice'>
                    <i className="fa-solid fa-circle-exclamation"></i>
                    <p>La contraseña debe contener <b>8 o más caracteres</b>. Los demás puntos son opcionales pero cuantos más cumplas tu contraseña será más segura. </p>
                </div>
                <ul>
                    <li style={length ? { color: '#589112' } : { color: '#575758' }}>8 o más caracteres</li>
                    <li style={capitalLetter ? { color: '#589112' } : { color: '#575758' }}>Mayúsculas</li>
                    <li style={number ? { color: '#589112' } : { color: '#575758' }}>Números</li>
                    <li style={specialCharacters ? { color: '#589112' } : { color: '#575758' }}>Caracters especiales</li>
                </ul>
            </div>
        </>
    )
}