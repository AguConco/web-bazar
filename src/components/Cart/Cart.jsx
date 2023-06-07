import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../context/cartContext"
import { AuthContext } from "../../context/authContext"
import { Loading } from "../Loading/Loading"
import { ProductCart } from "../ProductCart/ProductCart"
import { InvalidCart } from "../InvalidCart/InvalidCart"
import { EmptyCart } from "../EmptyCart/EmptyCart"
import './cart.css'

export function Cart() {

    const { getCart } = useContext(CartContext)
    const { user } = useContext(AuthContext)

    const [cart, setCart] = useState(null)
    const [loading, setLoading] = useState(true)
    const [stateCart, setStateCart] = useState(false)

    useEffect(() => {
        if (user !== null) {
            getCart()
                .then(e => e.json())
                .then(e => {
                    setCart(e)
                    setLoading(false)
                })
        }
        document.title = 'Carrito • Bazar Regalería'
    }, [user, stateCart])

    return (
        loading ?
            <Loading />
            :
            user ?
                <section className="cart">
                    <h1>Tu carrito</h1>
                    {cart?.total_quantity ?
                        <div className="cart-list">
                            <table cellSpacing={0}>
                                <thead>
                                    <tr>
                                        <th className="th-product">Producto</th>
                                        <th className="th-quantity">Cantidad</th>
                                        <th className="th-price">Precio</th>
                                        <th className="th-delete"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart?.products.map(e => <ProductCart data={e} key={e.id} setStateCart={setStateCart} />)}
                                </tbody>
                            </table>
                            <div className="cart-detail">

                            </div>
                        </div>
                        :
                        <EmptyCart />}
                </section>
                :
                <InvalidCart />
    )
}