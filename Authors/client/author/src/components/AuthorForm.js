import React ,{useState} from 'react'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const AuthorForm =(props) => {
    
  const btnStyle = {
    padding: '15px 15px',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
    backgroundColor: '#66BBFF', 
    color: 'white',
    border: 'none',
    marginLeft:'10px',
};
const label = {
  
  fontFamily: 'Arial, sans-serif',
  fontWeight: 'bold',
  fontSize:'20px',
  border: 'none',
  
};
    const[name,setName]=useState(props.initialName);
    const handelSubmit =e =>{
        e.preventDefault();
        props.handelSubmit({name});
        setName("");
    }
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <p>
            <label  style={ label }>Name :</label>
            <TextField id="filled-basic" label="Filled" variant="filled" onChange={e=>setName(e.target.value)} value={name} />
        </p>
        <input type="submit" value="submit"  style={ btnStyle }></input>
        
        <input type="submit" value="cancel" style={ btnStyle }></input>
        
      </form>
    </div>
  )
}

export default AuthorForm
