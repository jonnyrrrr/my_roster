import { useState } from "react";
import axios from "axios";

const UpdateRoster = () => {

    const [player_number, setPlayer_number] = useState(''); 
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');

    const handleSubmit = async(event) => {
        event.preventDefault();

        try {
            await axios.put(`http://localhost:3003/api/update/${player_number}`, {name, position});
            alert('Player successfully updated.')
        }
        catch(error){
            console.error('Failed to update player :(')
        }
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type='text' placeholder="Player Number" value={player_number} onChange={(event) => (setPlayer_number(event.target.value))} required></input>
        <input type='text' placeholder="Player Name" value={name} onChange={(event) =>(setName(event.target.value))} required></input>
        <input type='text' placeholder="Position" value={position} onChange={(event) =>(setPosition(event.target.value))} required></input>
        <button type='submit'>Update Player</button>
    </form>
  )
}

export default UpdateRoster
