 
import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const API_URL = "https://dummyjson.com/products?search=";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
 
  const handleSearch = async () => {
    try {
      const response = await axios.get(`${API_URL}`);
      if (Array.isArray(response.data.products)) {
        const filteredProducts = response.data.products.filter(
          (product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setProducts(filteredProducts);
      } else {
        setProducts([]); // Set products as an empty array if the response format is unexpected
      }
      console.log("API Response: ", response.data.products);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
  return (
    <div className="App">
      <div className="search-container">
        <input className="searchbar "
          type="text"
          placeholder="Enter search term..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="button" onClick={handleSearch}>Search</button>
      </div>
      <div className="results-container">
      {products.map((product, index) => (
  // <div key={index} className="product-card">
  //   <h2> {product.title}</h2>
  //   <div className="thumbnail-container">
  //     <img src={product.thumbnail} alt="Product Thumbnail" />
  //   </div>
  //   <div className="image-container">
  //     {product.images.map((image, imgIndex) => (
  //       <img key={imgIndex} src={image} alt={`Product ${imgIndex}`} />
  //     ))}
  //   </div>
  //   <p>Description: {product.description}</p>
  //   <p>Price: ${product.price}</p>
  //   <p>Brand: {product.brand}</p>
  //   <p>Category: {product.category}</p>
  //   <p>Rating: {product.rating}</p>
   
   
  //   <p>Remaining: {product.stock}</p>
  //   <p>Discount: {product.discountPercentage}</p>
  // </div>
  <div key={index} className="product-card">
  
  <div className="abc">
  <div  className="thumbnail-container">
  <h2>{product.title}</h2>
    <img src={product.thumbnail} alt="Product Thumbnail" />
    <p>  {product.description}</p>
    </div>
    <div className="xyz">
 
 
 <p>Price: <span className="price">${product.price}</span></p>
 <p> {product.brand}</p>
 <p> {product.category}</p>
 <p>Rating: <span className="rating">{product.rating}</span></p>
 <p>In stock:{product.stock}</p>
 <p>Discount: {product.discountPercentage}</p>
 <button className="button">Add to Cart</button>
 
  </div>
   
  
  </div>
  <div className="image-container">
    {product.images.map((image, imgIndex) => (
      <img clas key={imgIndex} src={image} alt={`Product ${imgIndex}`} />
    ))}
  </div>
  
</div>
))}


      </div>
    </div>
  );
};

export default App;












 