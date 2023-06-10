import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../context/cartContext"
import { AuthContext } from "../../context/authContext"
import { Loading } from "../Loading/Loading"
import { ProductCart } from "../ProductCart/ProductCart"
import { InvalidCart } from "../InvalidCart/InvalidCart"
import { EmptyCart } from "../EmptyCart/EmptyCart"
import { CartDetail } from "../CartDetail/CartDetail"
import './cart.css'

export function Cart() {

    const { getCart, stateCart, updateCartWidget } = useContext(CartContext)
    const { user } = useContext(AuthContext)

    const [cart, setCart] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (user !== null) {
            getCart()
                .then(e => e.json())
                .then(e => {
                    setCart(e)
                    updateCartWidget()
                })
        } 
        setLoading(false)
        
        document.title = 'Carrito • Bazar Regalería'
    }, [user, stateCart])

    return (
        user ?
            <section className="cart">
                <h1>Tu carrito</h1>
                {cart?.total_quantity ?
                    <div className="container-cart">
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
                                    {cart.products.map(e => <ProductCart data={e} key={e.id} />)}
                                </tbody>
                            </table>
                        </div>
                        <CartDetail products={cart.products} />
                    </div>
                    :
                    <EmptyCart />}
            </section>
            :
            loading ?
                <Loading />
                :
                <InvalidCart />
    )
}