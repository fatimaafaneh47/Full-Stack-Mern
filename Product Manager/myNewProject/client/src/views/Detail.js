import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
    
const Detail = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' +id)
            .then(res =>  {setProduct(res.data),console.log("herllo",id)})
            .catch(err => console.error(err));
    }, []);    
    return (
        <div>
            <h1>{product.title}</h1>
            <p>Price:{product.price}</p>
            <p>Description:{product.description}</p>
            <Link to={"/products/" + product._id + "/edit"}> Edit</Link>
        </div>
    )
}
    
export default Detail;