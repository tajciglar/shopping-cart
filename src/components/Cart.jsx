import { useContext } from "react";
import { CartContext } from "./CartContex.jsx";

const Cart = () => {

    const { cart } = useContext(CartContext);
    console.log(cart)
    return (
        <div className="cart">
            Your cart:
            {cart.map((item) => (
                 <li>{item.name}</li>
                )
            )};
        </div>
    )
}

export default Cart;