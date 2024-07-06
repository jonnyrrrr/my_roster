import {useState} from 'react';
import axios from 'axios';

const DeletePlayer = () => {
    const [player_number, setPlayer_Number] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            await axios.delete(`http://localhost:3003/api/delete/${player_number}`);
            alert('Cut player from roster');
        }
        catch(error){
            console.error(error)
        }
    }

  return (
    <form onSubmit={handleSubmit}>

    <input type='text' placeholder='Player Number' value={player_number} onChange={(event) => setPlayer_Number(event.target.value)} required/>
    <button type='submit'>Cut Player</button>

    </form>
  )
}

export default DeletePlayer
