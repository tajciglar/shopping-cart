import { useContext, useState, useEffect } from "react";
import { CartContext } from "./CartContex.jsx";
import './Cart.css';

const Cart = () => {
    const { cart, updateCart } = useContext(CartContext);
    const [total, setTotal] = useState(0);
        
    useEffect(() => {
        const newTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        setTotal(newTotal);
    }, [cart]);

    const handleQuantityChange = (item, change) => {
        
        const updatedCart = cart.map(cartItem => {
        if (cartItem.id === item.id) {
            const newQuantity = cartItem.quantity + change;
            return { ...cartItem, quantity: Math.max(newQuantity, 1) }; // Ensure quantity is at least 1
        }
            return cartItem;
        });
    
        updateCart(updatedCart);
    };

    return (
        <div className="cart">
        Your cart:
        {cart.map((item) => (
            <div key={item.id}>
            <li>{item.name}</li>
            <button onClick={() => handleQuantityChange(item, 1)}>+</button>
            {item.quantity}
            <button onClick={() => handleQuantityChange(item, -1)}>-</button>
            </div>
        ))}
        <p>Total price: ${total.toFixed(2)}</p>
        <button>CHECKOUT</button>
        </div>
    );
};

export default Cart;
