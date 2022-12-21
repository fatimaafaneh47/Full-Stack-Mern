import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DeleteButton from "./DeleteButton";

const ProductList = (props) => {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8000/api/products").then((res) => {
      setProducts(res.data);
    });
    
  }, [products]);

 
  return (
    <div>
      <h2>All Products</h2>

      {props.products.map((product, i) => (
        <div key={i}>
          <Link to={"/products/" + product._id}>{product.title}</Link>
          <DeleteButton productId={product._id} successCallback={() => props.removeFromDom(product._id)}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
