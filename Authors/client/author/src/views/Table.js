import React ,{useState,useEffect} from 'react'

import axios from 'axios'
import AuthorList from '../components/AuthorList';

const Table = () => {
    const [authors,setAuthors]=useState("")
    const [loaded, setLoaded] = useState(false);
    

    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors/')
            .then(res=>{
                setAuthors(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    });

    const removeFromDom = (authorId) => {
        setAuthors(authors.filter(author => author._id != authorId))
      };
    
  return (
    <div>
        {loaded &&
        <AuthorList  authors={authors}  removeFromDom={removeFromDom}  />}
    </div>
  )
}

export default Table;