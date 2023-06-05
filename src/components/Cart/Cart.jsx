import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../context/cartContext"
import { AuthContext } from "../../context/authContext"
import { Loading } from "../Loading/Loading"
import { ProductCart } from "../ProductCart/ProductCart"

export function Cart() {

    const { getCart } = useContext(CartContext)
    const { user } = useContext(AuthContext)

    const [cart, setCart] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (user !== null) {
            getCart().then(e => setCart(e))
        } else {
            setLoading(false)
        }

    }, [user])

    return (
        user ?
            cart ?
                <section>
                    <table cellSpacing={0}>
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Cantidad</th>
                                <th>Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(e => <ProductCart data={e} key={e.id} />)}
                        </tbody>
                    </table>
                </section>
                :
                <section>cart vacio</section>
            :
            loading ?
                <Loading />
                :
                <section>Inicia sesión para poder ver tu carrito</section>
    )
}