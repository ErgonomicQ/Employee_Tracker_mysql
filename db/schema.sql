-- make the database if it doesn't exist
CREATE DATABASE IF NOT EXISTS company_db;

-- Use the database
USE company_db;

-- make the department table
CREATE TABLE IF NOT EXISTS department (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

-- make the position table
CREATE TABLE IF NOT EXISTS position (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10, 2) NOT NULL,
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES department(id)
);

-- make the employee table
CREATE TABLE IF NOT EXISTS employee (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  position_id INT,
  manager_id INT,
  FOREIGN KEY (position_id) REFERENCES position(id),
  FOREIGN KEY (manager_id) REFERENCES employee(id)
);