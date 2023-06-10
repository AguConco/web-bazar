import { Link } from 'react-router-dom'
import './Product.css'

export function Product({ data }) {

    return (
        <Link to={'/product/' + data.id} title={data.name} className='product'>
            <div className='container-picture'>
                <img src={data.picture} alt={data.name} loading='lazy'/>
            </div>
            <div className="info-product">
                <div>
                    <span>$ {parseInt(data.price.price_public).toLocaleString('es-AR')}</span>
                    <p>{data.available_quantity} en stock</p>
                </div>
                <p>{data.name}</p>
            </div>
        </Link>
    )
}