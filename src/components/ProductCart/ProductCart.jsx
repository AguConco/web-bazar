import { Link } from "react-router-dom";
import './productCart.css'
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

export function ProductCart({ data, setStateCart }) {

    const { deleteProductCart } = useContext(CartContext)

    const deleteProduct = () => {
        deleteProductCart(data.id)
            .then(e => e.json())
            .then(e => e.response === 'success' && setStateCart(currentValue => !currentValue))
    }

    return (
        <tr className="product-cart">
            <td className="td-product" title={data.name}>
                <Link to={`/product/${data.id}`}>
                    <img src={data.picture} alt={data.name} />
                    <span>{data.name}</span>
                </Link>
            </td>
            <td className="td-quantity">{data.quantity} En stock: {data.available_quantity}</td>
            <td className="td-price">
                ${data.price * data.quantity}
                <br />
                <span>Unidad ${data.price}</span>
            </td>
            <td>
                <button onClick={() => deleteProduct()} className="delete-product-cart">
                    <i className="fa-regular fa-trash-can"></i>
                    <span>Eliminar</span>
                </button>
            </td>
        </tr>
    )
}