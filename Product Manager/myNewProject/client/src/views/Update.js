import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Update = (props) => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState();
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8000/api/products/" + id).then((res) => {
      setPrice(res.data.price);
      setDescription(res.data.description);
      setTitle(res.data.title);
    });
  }, []);
  const updateProduct = (e) => {
    e.preventDefault();
    console.log("Updating");
    axios
      .put("http://localhost:8000/api/products/" + id, {
        title,
        price,
        description,
      })
      .then((res) => navigate("/products"))
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <h1>Update a Product</h1>
      <form onSubmit={updateProduct}>
        <p>
          <label>Title</label>
          <br />
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </p>
        <p>
          <label>Price</label>
          <br />
          <input
            type="text"
            name="price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </p>
        <p>
          <label>Description</label>
          <br />
          <input
            type="text"
            name="description"
            value={price}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </p>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Update;
