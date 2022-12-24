
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


const PlayerList =(props)=>{
  const classes = useStyles();
  const link = {
   
    fontSize:'25px',
    marginLeft:'5%',
};
const playertable = {
    marginTop:'2%',
    marginLeft:'4%',
    border:'1px solid black',
    width:'60%'
    
};
   
  return (
    <div>
    <Link style={link} to={"/players/list"}>List</Link>|<Link style={link} to={"/players/addplayer"}>Add Player</Link>
        <TableContainer component={Paper}>
      <Table  style={playertable} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Team Name</TableCell>
            <TableCell >Prefered Position</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {props.players.map((player, i) => (
            <TableRow key={i}>
              <TableCell component="th" scope="row" style={{color:"#913FFF"}}>
              <Link to={"/players/list"}>{player.name}</Link> 
              </TableCell>
              <TableCell component="th" scope="row" style={{color:"#913FFF"}}>
              {player.position}
              </TableCell>
              <TableCell><DeleteButton  playerId={player._id} successCallback={() => props.removeFromDom(player._id)} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        
      
    </div>
  )
}

export default PlayerList;