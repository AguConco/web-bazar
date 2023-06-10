
export function QuantityCount({changeCount, quantity}) {
    return (
        <>
            <button onClick={() => changeCount(false)} type='button'>-</button>
            <input type="text" disabled value={quantity} />
            <button onClick={() => changeCount(true)} type='button'>+</button>
        </>
    )
}