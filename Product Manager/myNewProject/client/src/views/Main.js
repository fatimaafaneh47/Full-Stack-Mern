import React, { useEffect, useState } from "react";
//import ProductForm from '../components/ProductForm';
import ProductList from "../components/ProductList";
import ProductForm from "../components/ProductForm";
import axios from "axios";
const Main = (props) => {
  const [products, setproducts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => {
        setproducts(res.data);
        console.log(res.data);
        setLoaded(true);
        console.log(products);
      })
      .catch((err) => console.error(err));
  }, [products]);

  return (
    <div>
      <ProductForm />
      <hr />
      {loaded && <ProductList products={products} />}
    </div>
  );
};

export default Main;
