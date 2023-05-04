import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Header } from './components/Header/Header'


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<div>inicio</div>} />
        <Route path='/category/:categoryId' element={<div>categorías</div>} />
        <Route path='/login' element={<div>login</div>} />
        <Route path='/register' element={<div>register</div>} />
        <Route path='/cart' element={<div>cart</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
