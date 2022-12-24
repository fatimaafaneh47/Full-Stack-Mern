import React ,{useState,useEffect} from 'react'

import axios from 'axios'
import  PlayerList from '../components/PlayerList';

const Table = () => {
    const [players,setPlayers]=useState("")
    const [loaded, setLoaded] = useState(false);
    

    useEffect(()=>{
        axios.get('http://localhost:8000/api/players/')
            .then(res=>{
                setPlayers(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    });

    const removeFromDom = (playerId) => {
        setPlayers(players.filter(player => player._id != playerId))
      };
    
  return (
    <div>
        {loaded &&
        <PlayerList  players={players}  removeFromDom={removeFromDom}  />}
    </div>
  )
}

export default Table;