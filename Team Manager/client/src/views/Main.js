import React, { useEffect, useState } from "react";
import PlayerForm from "../components/PlayerForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const Main = (props) => {
  const [errors, setErrors] = useState([]);
  const [players, setPlayers] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const navigate =useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8000/api/players")
      .then((res) => {
        setPlayers(res.data);
        setLoaded(true);
      })
      .catch(err => console.error(err));
  }, []);

const createPlayer = player => {
    axios.post('http://localhost:8000/api/players', player)
        .then(res=>{
            setPlayers([...players, res.data]);navigate("/players/list")
        })
        .catch(err=>{
          const errorResponse = err.response.data.errors;
          const errorArr = [];
          for (const key of Object.keys(errorResponse)) {
              errorArr.push(errorResponse[key].message)
          }
          setErrors(errorArr);
      });
}
  return (
    <div>
    <PlayerForm handleSubmit={createPlayer} initialName="" initialPosition="" errors={errors}/>
    {errors.map((err, index) => <p key={index} style={{color:"red"}}>{err}</p>)}

 </div>
)
}
export default Main;