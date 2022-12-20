import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = (props) => {
  console.log(props.products, "from list");
  return (
    <div>
      <h2>All Products</h2>

      {props.products.map((product, i) => (
        <div key={i}><Link to={"/products/"+product._id}>{product.title}</Link></div>
      ))}
    </div>
  );
};

export default ProductList;
