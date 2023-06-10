import { Link } from "react-router-dom";
import './productCart.css'
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/cartContext";
import { QuantityCount } from "../QuantityCount/QuantityCount";
import { Loading } from "../Loading/Loading";

export function ProductCart({ data }) {

    const { deleteProductCart, updateCartWidget, updateCart, setStateCart } = useContext(CartContext)

    const [quantity, setQuantity] = useState(parseInt(data.quantity))
    const [loading, setLoading] = useState(true)

    const deleteProduct = () => {
        deleteProductCart(data.id)
            .then(e => e.json())
            .then(e => {
                if (e.response === 'success') {
                    setStateCart(currentValue => !currentValue)
                    updateCartWidget()
                }
            })
    }

    const changeCount = e => {
        e ?
            quantity < data.available_quantity && setQuantity(quantity + 1) :
            (data.available_quantity !== 0 && quantity > 1) && setQuantity(quantity - 1)
    }

    useEffect(() => {
        setLoading(true)
        updateCart(data.id, quantity)
            .then(e => e && setLoading(false))
        setStateCart(currentValue => !currentValue)
    }, [quantity])

    return (
        <tr className="product-cart">
            <td className="td-product" title={data.name}>
                <Link to={`/product/${data.id}`}>
                    <img src={data.picture} alt={data.name} loading="lazy" />
                    <span>{data.name}</span>
                </Link>
            </td>
            <td className="td-quantity">
                {loading ?
                    <Loading />
                    :
                    <div>
                        <QuantityCount quantity={quantity} changeCount={changeCount} />
                    </div>
                }
                <span>En stock: {data.available_quantity}</span>
            </td>
            <td className="td-price">
                ${(data.price * quantity).toLocaleString('es-AR')}
                <br />
                <span>Unidad ${parseInt(data.price).toLocaleString('es-AR')}</span>
            </td>
            <td className="td-delete">
                <button onClick={() => deleteProduct()} className="delete-product-cart">
                    <i className="fa-regular fa-trash-can"></i>
                    <span>Eliminar</span>
                </button>
            </td>
        </tr>
    )
}