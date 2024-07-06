const express = require('express');

const mySql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const port = 3003; 

app.use(cors());

app.use(bodyParser.json());

const db = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin123',
    database: 'myroster'
}); 

db.connect(err => {
    if(err){
        console.error('Failed to connect to Database', err.stack)
        return;
    }
    console.log('Successfully conncted to Database :)')
});


//Create
app.post('/api/create', (req, res) => {
    console.log(req.body)
    const {name, position} = req.body;
    const sql = "INSERT INTO player (name, position) VALUES (?, ?)";

    db.query(sql, [name, position, (err, result) => {
        if(err){
            throw err;
        }
        res.send("Player added to roster.")
    }])
})

//Read
app.get('/api/player', (req, res) => {
    const sql = "SELECT * FROM player";
    db.query(sql, (err, results) => {
        if(err) throw err; 
        res.json(results);
    })
});

//Update 
app.put('/api/update/:player_number', (req, res) => {
    const {name, position} = req.body; 
    const player_number = req.params;


    const sql = 'UPDATE player SET name = ?, position = ? WHERE player_number = ?';
    db.query(sql, [name, position, player_number], (err, result) => {
        if(err) throw err; 
        res.send('Player successfully updated');
    })
});

//Delete
app.delete('/api/delete/:player_number', (res, rep)=> {
    const player_number = req.params;
    const sql = "DELETE FROM player WHERE player_number = ? ";
    db.query(sql, [player_number], (result, err) => {
        if(err) throw err;
        res.send('Player was cut from roster');
    })
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});