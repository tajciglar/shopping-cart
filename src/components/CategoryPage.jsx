import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "./CartContex.jsx";

const CategoryPage = () => {
    const { category } = useParams();
    const { addToCart } = useContext(CartContext);
    
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/data.json')
        .then((response) => {
            if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            const categoryData = data.categories.find(cat => cat.name === category);
            setData(categoryData);
            setLoading(false);
        })
        .catch((err) => {
            setError(err);
            setLoading(false);
        });
    }, [category]);

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
        <div className="categoryPage">
        <h2>{data.name}</h2>
        <ul>
            {data.items.map(item => (
            <li key={item.id}>
                {item.name} <br></br>
                ${item.price}
                <button type="submit" onClick={() => addToCart(item)}>Add To Cart</button>
            </li>
            ))}
        </ul>
        </div>
    );
};

export default CategoryPage;
