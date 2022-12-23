import React, { useEffect, useState } from "react";
import AuthorList from "../components/AuthorList";
import AuthorForm from "../components/AuthorForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const Main = (props) => {
  const [errors, setErrors] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const navigate =useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8000/api/authors")
      .then((res) => {
        setAuthors(res.data);
        setLoaded(true);
      })
      .catch(err => console.error(err));
  }, []);

const createAuthor = name => {
    axios.post('http://localhost:8000/api/authors', name)
        .then(res=>{
            setAuthors([...authors, res.data]);navigate("/")
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
      <h1>Favorite Author</h1>
      <Link to={"/"}>Home</Link>
      {errors.map((err, index) => <p key={index} style={{color:"red"}}>{err}</p>)}
    <h2 style={{color:"#8F3AFF"}}>Add a new Author</h2>
    <AuthorForm handelSubmit={createAuthor} initialName="" errors={errors}/>

 </div>
)
}
export default Main;