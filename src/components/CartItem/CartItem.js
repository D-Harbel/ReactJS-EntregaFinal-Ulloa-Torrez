import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ item, quantity}) => {
    const {clearCart} = useContext(CartContext)
    return (
        <div>
            <h4>{item.name}</h4>
            <p>cantidad: {quantity}</p>
            <button onClick={() => clearCart(item.id)}>Eliminar</button>
        </div>
    )
}

export default CartItem