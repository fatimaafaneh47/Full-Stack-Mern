import axios from "axios";
import React from "react";

const DeleteButton = (props) => {
  const { productId, successCallback } = props;

  const deleteProduct = (e) => {
    axios.delete("http://localhost:8000/api/products/" + productId)
      .then(() => {successCallback();})
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <button onClick={deleteProduct}>Delete</button>
    </div>
  );
};

export default DeleteButton;
