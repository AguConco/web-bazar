import { Link } from 'react-router-dom'
import './Product.css'

export function Product({ data }) {

    return (
        <Link to={'/product/' + data.id} title={data.name} className='product'>
            <div className='container-picture'>
                <img src={data.picture} alt={data.name} />
            </div>
            <div className="info-product">
                <span>$ {data.price.price_public}</span>
                <h2>{data.name}</h2>
            </div>
        </Link>
    )
}