import React ,{useState} from 'react';
import axios from 'axios';
const ProductForm = (props) =>{
    
    const [title,setTitle]= useState(props.initialTitle);
    const[price,setPrice]=useState(props.initialPrice);
    const[description,setDescription]=useState(props.initialDescription);

    const handelSubmit = e => {
        e.preventDefault();
        props.handelSubmit({title,price,description});
        setTitle("");
        setPrice("");
        setDescription("");
    }
return (
    <form onSubmit={handelSubmit}>
        <h1>Product Manager</h1>
        <p>
            <label>Title</label>
            <input type="text" onChange={e=>setTitle(e.target.value)} value={title} ></input>
        </p>
        <p>
            <label>Price</label>
            <input type="number" onChange={e=>setPrice(e.target.value)} value={price}></input>
        </p>
        <p>
            <label>Description</label>
            <input type="text" onChange={e=>setDescription(e.target.value)} value={description}></input>
        </p>
        <input type="submit"/>
    </form>
)
}
export default ProductForm;