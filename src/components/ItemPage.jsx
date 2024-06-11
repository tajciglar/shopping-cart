import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "./CartContex.jsx";
import './ItemPage.css'

const ItemPage = () => {
    const { items } = useParams();
    const { addToCart } = useContext(CartContext);
    
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [itemPopUp, setItemPopUp] = useState(null);

    const handleOpenPopUp = (item) => {
        setIsPopupVisible(true); // Show the pop-up
        setItemPopUp({ ...item, quantity: 1 });
      };

    const handleAddToCart = (item) => {
        addToCart(item);
        handleClosePopup();
    }
    
    const handleClosePopup = () => {
        setIsPopupVisible(false); // Hide the pop-up
    };

    const increaseQuantity = () => {
        setItemPopUp((prevItem) => ({ ...prevItem, quantity: prevItem.quantity + 1 }));
    };
    
    const decreaseQuantity = () => {
        setItemPopUp((prevItem) => ({ ...prevItem, quantity: Math.max(prevItem.quantity - 1, 1) }));
    };
    

    useEffect(() => {
        fetch('/data.json')
        .then((response) => {
            if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            const categoryData = data.categories.find(cat => cat.name === items);
            setData(categoryData);
            setLoading(false);
        })
        .catch((err) => {
            setError(err);
            setLoading(false);
        });
    }, [items]);

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (error) {
        return <div className="error">Error: {error.message}</div>;
    }

    if (!data) {
        return <div className="error">Category not found</div>;
    }

    return (
        <div className="itemPage">
            <h2>{data.name}</h2>
            <ul>
                {data.items.map(item => (
                <li key={item.id}>
                    {item.name} <br></br>
                    ${item.price}
                    <button type="submit" onClick={() => handleOpenPopUp(item) }>Add To Cart</button>
                </li>
                ))}
            </ul>
            {isPopupVisible && (
                <>
                    <div className="overlay" onClick={handleClosePopup}></div>
                    <div className="pop-up">
                        <p>{itemPopUp.name}</p>
                        <p>{itemPopUp.price}</p>
                        <button onClick={decreaseQuantity}>-</button>
                        <p>{itemPopUp.quantity}</p>
                        <button onClick={increaseQuantity}>+</button>
                        <button type="submit" onClick={() => handleAddToCart(itemPopUp)}>Add to Cart</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default ItemPage;
