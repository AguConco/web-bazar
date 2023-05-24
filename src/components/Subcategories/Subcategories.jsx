import { Link, useParams } from "react-router-dom"
import { ProductContext } from "../../context/productContext"
import { useContext } from "react"

export function Subcategories({ data }) {

    const { setLoadedProducts } = useContext(ProductContext)
    const { subcategoryId, categoryId } = useParams()

    return (
        <li>
            <Link to={'/category/' + categoryId + '/' + data.split('|')[1]} onClick={() => setLoadedProducts(2)} >
                {data.split('|')[1] === subcategoryId ? <i class="fa-regular fa-circle-check"></i> : <i class="fa-regular fa-circle"></i>}
                <span>{data.split('|')[0]}</span>
            </Link>
        </li>
    )
}