  
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const API_URL = "https://dummyjson.com/products";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        if (Array.isArray(response.data.products)) {
          setProducts(response.data.products);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();  
  }, []);  

  const handleSearch = () => {
    const filtered = products.filter(
      (product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProducts(filtered);
  };

  return (
    <div className="App">
      <div className="search-container">
        <input
          className="searchbar"
          type="text"
          placeholder="Enter search term..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="button" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="results-container">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <div className="abc">
              <div className="thumbnail-container">
                <h2 className="title">{product.title}</h2>
                <img src={product.thumbnail} alt="Product Thumbnail" />
                <p className="description">{product.description}</p>
                <p className="price">Price: <span className="price">${product.price}</span></p>
                <p>{product.brand}</p>
                <p>{product.category}</p>
                <p>Rating: <span className="rating">{product.rating}</span></p>
                <p>In stock: {product.stock}</p>
                <p>Discount: {product.discountPercentage}</p>
                <button className="buttonn">Add to Cart</button>
              </div>
            </div>
            <div className="image-container">
              {product.images.map((image, imgIndex) => (
                <img
                  key={imgIndex}
                  src={image}
                  alt={`Product ${imgIndex}`}
                  className="product-image"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

