import { useContext, useEffect, useState } from "react"
import { ProductContext } from "../../context/productContext"
import { useParams } from "react-router-dom"
import { Product } from "../Product/Product"
import { Loading } from "../Loading/Loading"
import './ProductList.css'
import { category } from "../../constants/constants"

export function ProductListForCategory() {

    const { getProducts, productList, loadedProducts, setLoadedProducts } = useContext(ProductContext)
    const { categoryId } = useParams()

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        getProducts(categoryId, setLoading)
    }, [categoryId, loadedProducts])

    return (
        !loading ?
            <section className="section-products">
                <div className="filters">
                    <span>{category.filter(e => e.categoryId === categoryId )[0].categoryName}</span>
                </div>
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