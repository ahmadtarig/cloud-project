-- Create a database
SELECT 'Executing init.sql script...' AS 'Message';

CREATE DATABASE IF NOT EXISTS maybe;

-- Create a new user 'abdullah' with password '123564' and grant privileges on the 'maybe' database

CREATE USER 'abdullah'@'%' IDENTIFIED WITH mysql_native_password AS '123564';
GRANT ALL PRIVILEGES ON maybe.* TO 'abdullah'@'%';
FLUSH PRIVILEGES;

-- Use the created database
USE maybe;

-- Create a table for students
CREATE TABLE IF NOT EXISTS students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    cgpa DECIMAL(3, 2) NOT NULL,
    student_id VARCHAR(10) NOT NULL
);

-- Insert some initial data
INSERT INTO students (name, age, cgpa, student_id) VALUES
('John Doe', 20, 3.75, 'A001'),
('Jane Smith', 22, 3.85, 'A002');

SELECT 'init.sql script execution completed.' AS 'Message';
