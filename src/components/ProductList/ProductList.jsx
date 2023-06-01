import { useContext, useEffect, useState } from "react"
import { ProductContext } from "../../context/productContext"
import { Link, useParams } from "react-router-dom"
import { Product } from "../Product/Product"
import { Loading } from "../Loading/Loading"
import './ProductList.css'
import { category, subcategories } from "../../constants/constants"
import { Subcategories } from "../Subcategories/Subcategories"

export function ProductListForCategory() {

    const { getProductsCategory, getProductsSubcategory, productList, loadedProducts, setLoadedProducts } = useContext(ProductContext)
    const { categoryId, subcategoryId } = useParams()

    const [loading, setLoading] = useState(true)
    const [sub, setSub] = useState()

    const currentCategory = category.filter(e => e.categoryId === categoryId)[0].categoryName

    useEffect(() => {
        document.title = currentCategory + ' • Bazar Regalería'

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
        subcategoryId === 'all' ? getProductsCategory(categoryId, setLoading) : getProductsSubcategory(subcategoryId, setLoading)
        setSub(subcategories.filter(s => s[0] === categoryId))
    }, [categoryId, subcategoryId, loadedProducts])

    return (
        !loading ?
            <section className="section-products">
                <aside className="filters">
                    <h3>{currentCategory}</h3>
                    <div>
                        <div className="filters-header">
                            <span>Subcategorías</span>
                        </div>
                        <ul>
                            <li>
                                <Link to={`/category/${categoryId}/all`} >
                                    {'all' === subcategoryId ? <i className="fa-regular fa-circle-check"></i> : <i className="fa-regular fa-circle"></i>}
                                    <span>Todos</span>
                                </Link>
                            </li>
                            {sub[0].map(e => e !== categoryId && <Subcategories key={e} data={e} />)}
                        </ul>
                    </div>
                </aside>
                <div>
                    <div className="product-list">
                        {productList.products.map(e => <Product key={e.id} data={e} />)}
                    </div>
                    <div className='pagination'>
                        {loadedProducts > 2 && <button onClick={() => setLoadedProducts(loadedProducts - 2)}>Anterior</button>}
                        <span>{loadedProducts / 2} de {Math.ceil(productList.total / 20)}</span>
                        {(loadedProducts * 10) < productList.total && <button onClick={() => setLoadedProducts(loadedProducts + 2)}>Siguente</button>}
                    </div>
                </div>
            </section>
            :
            <Loading />
    )
}