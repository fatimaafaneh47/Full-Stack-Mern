import axios from "axios";
import React from "react";

const DeleteButton = (props) => {
  const { authorId, successCallback } = props;

  const deleteAuthor = (e) => {
    axios.delete("http://localhost:8000/api/authors/" + authorId)
      .then(() => {successCallback();})
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <button onClick={deleteAuthor}>Delete</button>
    </div>
  );
};

export default DeleteButton;