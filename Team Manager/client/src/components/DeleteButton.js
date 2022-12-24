import axios from "axios";
import React from "react";

const DeleteButton = (props) => {
  const { playerId, successCallback } = props;

  const deletePlayer = (e) => {
    let confirm = window.confirm("Are you sure you want to Delete this "+props.name);
    if (confirm){
    axios.delete("http://localhost:8000/api/players/" + playerId)
      .then(() => {successCallback();})
      .catch((err) => console.error(err));
  };
}
  return (
    <div>
      <button onClick={deletePlayer} style={{backgroundColor:"#CF2A27",color:"white",width:'130px'}}>Delete</button>
    </div>
  );
};

export default DeleteButton;