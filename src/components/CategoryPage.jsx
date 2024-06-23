import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './CategoryPage.css';

const CategoryPage = () => {
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
            setData(data);
            setLoading(false);
        })
        .catch((err) => {
            setError(err);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (error) {
        return <div className="error">Error: {error.message}</div>;
    }

    return (
        <div className="categoryPage">
        {data.categories.map((category) => (
            <Link to={category.name} key={category.name} className="category-link">
            <div className="category">
                <div className="card-category">
                     <p>{category.name}</p>
                </div>
            </div>
            </Link>
        ))}
        </div>
    );
};

export default CategoryPage;
