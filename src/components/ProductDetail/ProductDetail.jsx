import { useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { ProductContext } from "../../context/productContext"
import { Loading } from "../Loading/Loading"
import './ProductDetail.css'
import { category, subcategories } from "../../constants/constants"
import { AddToCart } from "../AddToCart/AddToCart"

export function ProductDetail() {

    const { detailProduct, setLoadedProducts } = useContext(ProductContext)
    const { productId } = useParams()

    const [detail, setDetail] = useState(null)
    const [linkSubcategories, setLinkSubcategories] = useState([])

    useEffect(() => {
        detailProduct(productId)
            .then(e => e.json())
            .then(e => {
                setDetail(e[0])
                const sub = subcategories.filter(s => s[0] === e[0].category.category_id)
                linkSubcategories.length === 0 && setLinkSubcategories([...linkSubcategories, ...sub[0].map(s => e[0].category.subcategory.includes(s.split('|')[1]) && s)])
            })
        // falta funcion del context que actualiza las views del producto
    }, [productId])

    return (
        detail ?
            <div className="product-detail">
                <div className="product-detail-container-picture">
                    <img src={detail.picture} alt={detail.name} />
                </div>
                <div className="product-detail-info">
                    <div className="product-info">
                        <div>
                            <span className="product-code">Código de referencia: {detail.code}</span>
                            <h1 className="product-name">{detail.name}</h1>
                            <span className="product-price">${detail.price.price_public}</span>
                        </div>
                        <AddToCart stock={detail.available_quantity} />
                    </div>
                    <div className="product-categories-subcategories">
                        <span>Ver más sobre</span>
                        <Link
                            to={`/category/${detail.category.category_id}/all`}
                            onClick={() => setLoadedProducts(2)}
                        >{category.map(e => e.categoryId === detail.category.category_id && e.categoryName)}</Link>
                        {linkSubcategories.map(e => e && <Link
                            key={e.split('|')[1]}
                            to={`/category/${detail.category.category_id}/${e.split('|')[1]}`}
                            onClick={() => setLoadedProducts(2)}
                        >{e.split('|')[0]}</Link>)}
                    </div>
                </div>
            </div>
            :
            <Loading />
    )
}