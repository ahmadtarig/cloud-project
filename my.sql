CREATE DATABASE  cloud;
USE cloud;

CREATE TABLE IF NOT EXISTS students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    age INT,
    cgpa FLOAT,
    student_id VARCHAR(10)
);
