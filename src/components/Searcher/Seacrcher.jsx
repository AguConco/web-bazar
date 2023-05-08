import './Searcher.css'

export function Searcher() {
    return (
        <form className='searcher'>
            <input type="text" autoComplete='off' placeholder='Buscar un producto'/>
            <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
        </form>
    )
}