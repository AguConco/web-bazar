import { useEffect } from "react"
import { useParams } from "react-router-dom"

export function ProductDetail() {

    const { productId } = useParams()

    useEffect(() => {
        // función del context que hace fetch para obtener el detalle
        // funcion del context que actualiza las views del producto
    }, [productId])

    return (
        <div>
            {productId}
        </div>
    )
}