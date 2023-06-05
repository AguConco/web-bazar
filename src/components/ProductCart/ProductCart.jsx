import { Link } from "react-router-dom";

export function ProductCart({ data }) {
    return (
        <tr>
            <td>
                <Link to={`/product/${data.id}`}>
                    <img width={40} height={40} src={data.picture} alt={data.name} />
                    {data.name}
                </Link>
            </td>
            <td>{data.quantity} máximo: {data.available_quantity}</td>
            <td>${data.price * data.quantity}
                <span>Precio unitario: ${data.price}</span>
            </td>
        </tr>
    )
}