const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3000;

const connection = mysql.createConnection({
  host: 'localhost', // or '127.0.0.1'
  user: 'root',
  password: '',
  database: 'cloud'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

app.use(cors({
  origin: 'http://localhost:8080', // Allow cross-origin requests from this origin only
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allow these HTTP methods

  allowedHeaders: ['Content-Type'], // Allow these headers
  credentials: true // Allow cookies and authentication headers
}));

app.use(express.json());

app.post('/addStudent', (req, res) => {
  const { name, age, cgpa, id } = req.body;
  const sql = 'INSERT INTO students (name, age, cgpa, id) VALUES (?, ?, ?, ?)';
  const values = [name, age, cgpa, id];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).json({ error: 'An error occurred while adding the student' });
      return;
    }
    console.log('Student added successfully');
    res.status(200).json({ message: 'Student added successfully' });
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});