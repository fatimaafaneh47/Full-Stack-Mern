import React ,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';


const PlayerForm =(props) =>{

    const[name,setName]=useState(props.initialName);
    const[position,setPosition]=useState(props.initialPosition);
    const handleSubmit=e=>{
        e.preventDefault();
        props.handleSubmit({name,position});
        setName("");
        setPosition("");
    }
    const btnStyle = {
        padding: '15px 15px',
        fontFamily: 'Arial, sans-serif',
        fontWeight: 'bold',
        backgroundColor: '#009E0F', 
        color: 'white',
        border: 'none',
        marginLeft:'22%',
        width:'300px'
    };
    const label = {
        
        fontFamily: 'Arial, sans-serif',
        fontWeight: 'bold',
        fontSize: '22px',
        marginRight:'2%',
        
    };
    const text = { 
        width:'490px',
    };
    const main = {
        textAlign:'center' ,
        marginLeft:'20%',
        border:'1px solid black',
        width:'40%',
        padding:'2%',
        marginTop:'4%',
    };
    const link = {
        marginRight:'2%',
        fontSize:'25px'
    };
    
  return (
    <div style={main}>
    <Link style={link} to={"/players/list"}>List</Link>|<Link style={link} to={"/players/addplayer"}>Add Player</Link>
    <h2 >Add Player</h2>
      <form onSubmit={handleSubmit}>
        
      <p>
            <label style={label}>Player Name :</label>
            <TextField style={text} id="filled-basic" label="Filled" variant="filled" onChange={e=>setName(e.target.value)} value={name} />
        </p>
        <p>
            <label style={label}>Player Position :</label>
            <TextField style={text} id="filled-basic" label="Filled" variant="filled" onChange={e=>setPosition(e.target.value)} value={position} />
        </p>
        <input type="submit" value="Add"  style={ btnStyle }></input>
      </form>
    </div>
  )
}

export default PlayerForm
