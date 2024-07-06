import { useState } from "react";
import axios from 'axios';

import React from 'react'

const CreatPlayer = () => {
    const [name, setName] = useState('');
    const [position, setPosition] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            await axios.post('http://localhost:3003/api/create', {name, position});
            alert('Player added to roster!')
        }
        catch(err){
            console.error(err)
        }
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type='text' placeholder='name' value={name} onChange={(event) => setName(event.target.value)} required/>
        <input type='text' placeholder='position' value={position} onChange={(event) => setPosition(event.target.value)} required/>
        <button type='submit'>Add Player</button>
    </form>
  )
}

export default CreatPlayer
