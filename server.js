const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'fullstack'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    let sql = 'INSERT INTO user (user_id, pass) VALUES (?, ?)';
    let values = [username, password];

    db.query(sql, values, (err, result) => {
        if (err) throw err;
        res.send('User logged in and data uploaded to database');
    });
});

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});