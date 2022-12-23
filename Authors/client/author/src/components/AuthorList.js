import axios from 'axios';
import React ,{useState,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import DeleteButton from './DeleteButton';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


const AuthorList =(props)=>{
  const classes = useStyles();
   
  return (
    <div>
        <h1>Favorite Authors</h1>
        <h2 style={{color:"#913FFF"}}>we have quotes by:</h2>
        <Link to={"/new"}>Add an author</Link>
        <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Authors</TableCell>
            <TableCell align="right">Actions available</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {props.authors.map((author, i) => (
            <TableRow key={i}>
              <TableCell component="th" scope="row" style={{color:"#913FFF"}}>
                {author.name}
              </TableCell>
              <TableCell align="right"><button><Link to={"/authors/"+author._id}>Edit</Link></button>
              <DeleteButton authorId={author._id} successCallback={() => props.removeFromDom(author._id)} /></TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        
      
    </div>
  )
}

export default AuthorList
