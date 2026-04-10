import React, { useEffect, useState } from "react";
import { getProducts } from "../services/productApi";
import { Link } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(res => {
      setProducts(res.data.products);
    });
  }, []);

  return (
    <div>
      <h2>Products</h2>

      <div className="product-grid">
        {products.map(product => (
          <div key={product.id}>
            
           <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition text-center">

  <img 
    src={product.thumbnail} 
    alt={product.title}
    className="h-40 w-full object-contain mb-2"
  />

  <h4 className="font-semibold mt-2 text-sm h-12 overflow-hidden">
    {product.title}
  </h4>

  <p className="text-green-600 font-bold">${product.price}</p>

  <Link to={`/product/${product.id}`}>
    <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2 w-full">
      View Details
    </button>
  </Link>

</div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;