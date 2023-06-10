import { useContext, useState, useRef } from 'react'
import './Searcher.css'
import { ProductContext } from '../../context/productContext'
import { Link } from 'react-router-dom'

export function Searcher() {

    document.onclick = e => {
        if (searchRef.current && !searchRef.current.contains(e.target)) setSearchResult(null)
    }

    const { searchProduct } = useContext(ProductContext)
    const [searchResult, setSearchResult] = useState(null)
    const [search, setSearch] = useState()
    const searchRef = useRef()

    const changeSearchValue = (name) => {
        setSearch(name)
        searchProduct({ code: '', name })
            .then(e => e.json())
            .then(e => e?.response === 'error' ? setSearchResult(null) : setSearchResult(e))
    }


    return (
        <div className='containerSearcher' ref={searchRef}>
            <form className='searcher' onSubmit={e => e.preventDefault()}>
                <input
                    type="text"
                    onFocus={({ target }) => changeSearchValue(target.value.trim())}
                    onKeyUp={({ target }) => changeSearchValue(target.value.trim())}
                    autoComplete='off'
                    placeholder='Buscar un producto' />
                <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>
            {searchResult &&
                <ul className='searchResult'>
                    {searchResult.length === 0 ?
                        <div>
                            <span>No se encontraron resultados "{search}"</span>
                        </div>
                        : searchResult.map(e =>
                            <li key={e.id}>
                                <Link
                                    to={'/product/' + e.id}
                                    onClick={() => setSearchResult(null)}
                                    className='result'>
                                    <div><img src={e.picture} alt={e.name} /></div>
                                    <span>{e.name}</span>
                                </Link>
                            </li>
                        )}
                </ul>}
        </div>
    )
}