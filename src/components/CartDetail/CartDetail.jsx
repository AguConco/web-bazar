import { Link } from 'react-router-dom'
import './CartDetail.css'

export function CartDetail({ products }) {

    const totalproductsPrice = products.reduce((a, b) => { return parseInt(a) + parseInt(b.price * b.quantity) }, 0)
    const delivery = 1500

    return (
        <div className="cart-detail">
            <h3>Detalle de tu carrito</h3>
            <div className='cart-detail-info'>
                <p>Envio:<span> ${delivery.toLocaleString('es-AR')}</span></p>
                <p>Productos:<span> ${totalproductsPrice.toLocaleString('es-AR')}</span></p>
                <p>Total:<span> ${(1500 + totalproductsPrice).toLocaleString('es-AR')}</span></p>
            </div>
            <div>
                <Link to={'/checkout'} className='btn-buy'>Continuar comprar</Link>
            </div>
        </div>
    )
}