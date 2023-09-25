DROP DATABASE IF EXISTS company_db;
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
CREATE TABLE IF NOT EXISTS job (
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
  job_id INT,
  manager_id VARCHAR(60),
  FOREIGN KEY (job_id) REFERENCES job(id)
);
