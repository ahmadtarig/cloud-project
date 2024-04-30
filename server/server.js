const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors({
  origin: 'http://localhost:8080', // Replace with your frontend origin
  methods: ['POST'], // Allow only POST requests
  allowedHeaders: ['Content-Type'], // Allow only Content-Type header
}));



// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'mysql',
  user: 'abdullah',
  password: '123564',
  database: 'maybe',
});
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    process.exit(1); // Exit the application if unable to connect to MySQL
  }
  console.log('Connected to MySQL database!');
});

// Middleware to parse JSON request bodies
app.use(express.json());

// Add a student route
app.post('/addStudent', (req, res) => {
  console.log('Request body:', req.body);

  // Extract student data from request body
  const { name, age, cgpa, student_id  } = req.body;

  // Insert student data into MySQL database
  const query = 'INSERT INTO students (name, age, cgpa, student_id ) VALUES (?, ?, ?, ?)';
  connection.query(query, [name, age, cgpa, student_id ], (err, results) => {
    if (err) {
      console.error('Error inserting student into database:', err);
      res.status(500).json({ message: 'Error inserting student into database' });
      return;
    }
    console.log(`Inserted student with ID: ${results.insertId}`);
    res.json({ message: 'Student added successfully' });
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});