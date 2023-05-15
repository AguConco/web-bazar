import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { initializeApp } from "firebase/app"
import { Login } from './components/Login/Login'
import { AuthProvider } from './context/authContext'
import { Register } from './components/Register/Register'
import { Profile } from './components/Profile/Profile'

const firebaseConfig = {
  apiKey: "AIzaSyDCRKtrnLExKto3CZcwKeoqWoqouk_Z3Gc",
  authDomain: "bazar-regalaria.firebaseapp.com",
  projectId: "bazar-regalaria",
  storageBucket: "bazar-regalaria.appspot.com",
  messagingSenderId: "377885634962",
  appId: "1:377885634962:web:3e19e3574e753d9de5d14b"
};

initializeApp(firebaseConfig);

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path='/' element={<div>inicio</div>} />
          <Route path='/category/:categoryId' element={<div>categorías</div>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/password-reset' element={<div>cambiar contraseña</div>} />
          <Route path='/cart' element={<div>cart</div>} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/my-purchases' element={<div>mis compras</div>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
