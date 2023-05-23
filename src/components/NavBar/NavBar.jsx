import { useContext, useRef, useState } from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import { ProductContext } from '../../context/productContext'
import { category } from '../../constants/constants'

export function NavBar() {

    const { setLoadedProducts } = useContext(ProductContext)

    return (
        <nav>
            <ul>
                {category.map(c => {
                    return c.categoryId !== 'all' &&
                        <li key={c.categoryId}>
                            <Link onClick={() => setLoadedProducts(2)} to={'/category/' + c.categoryId}>{c.categoryName}</Link>
                        </li>
                })}
            </ul>
        </nav>
    )
}