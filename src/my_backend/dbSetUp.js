const express = require('express');

const mySql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();

const port = 3003; //React app is running on port 3002

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


app.listen(port, () =>{
 console.log(`Server running on port ${port}`)
});