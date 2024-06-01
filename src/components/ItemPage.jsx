import React, { useEffect, useState } from "react";

const ItemPage = () => {
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
    <div className="itemPage">
      {data.categories.map((category) => (
        <div key={category.name} className="category">
          <h2>{category.name}</h2>
          <ul>
            {category.items.map((item) => (
              <li key={item.id}>
                <h3>{item.name}</h3>
                <p>Price: ${item.price.toFixed(2)}</p>
                <p>Organic: {item.organic ? 'Yes' : 'No'}</p>
                <p>Dietary: {item.dietary.length > 0 ? item.dietary.join(', ') : 'None'}</p>
                <p>Bulk Purchase: {item.bulk ? 'Available' : 'Not Available'}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ItemPage;
