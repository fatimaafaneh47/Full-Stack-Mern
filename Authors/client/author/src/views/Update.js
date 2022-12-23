import React ,{useState,useEffect}from 'react'
import { useNavigate ,useParams } from 'react-router-dom';
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';
import { Link } from 'react-router-dom';
const Update=()=>{
    const {id} =useParams();
    const[author,setAuthor]=useState({});
    const[loaded,setLoaded]=useState(false);
    const navigate=useNavigate();
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                setAuthor(res.data);
                console.log(res.data)
                setLoaded(true);
            }).catch(err=>console.log(err))
    }, []) 
    const updateAuthor = author => {
        axios.put('http://localhost:8000/api/authors/'+id, author)
        .then(res =>{ console.log(res)
            navigate("/")
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
        <h1>Favorite Authors</h1>
        <Link to={"/"}>Home</Link>
      <h2 style={{color:"#913FFF"}}>Edit this Author</h2>
      {errors.map((err, index) => <p key={index} style={{color:"red"}}>{err}</p>)}
      {loaded && (<>
            <AuthorForm handelSubmit={updateAuthor}
             initialName={author.name} />
        </>
        )}
    </div>
  )
}

export default Update
