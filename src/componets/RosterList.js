import {useState, useEffect} from 'react';
import axios from 'axios';

const RosterList = () => {
    
    const [player, setPlayer] = useState([])

    useEffect(() => {
        const fetchPlayers = async () =>{
            const response = await axios.get('http://localhost:3003/api/player');
            setPlayer(response.data)
        }
        fetchPlayers();
    }, []);

  return (
    <div>
        <h1>Your Roster</h1>

        <ul>
            {console.log(player, "PPPPP")}
            {player.map(players => (
                <li key={players.player_number}>{players.name} - {players.position}</li>
            ))}
        </ul>
    </div>
  )
}

export default RosterList
