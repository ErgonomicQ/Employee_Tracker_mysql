const { connectToDatabase } = require('./connection.js');

// get a list of all departments
async function getAllDepartments() {
  const connection = await connectToDatabase();
  try {
    const [rows] = await connection.query('SELECT * FROM department');
    return rows;
  } finally {
    connection.end();
  }
}

//  get a list of all positions
async function getAllPositions() {
  const connection = await connectToDatabase();
  try {
    const [rows] = await connection.query('SELECT * FROM job');
    return rows;
  } finally {
    connection.end();
  }
}

// get a list of all employees
async function getAllEmployees() {
  const connection = await connectToDatabase();
  try {
    const [rows] = await connection.query(`
      SELECT 
        e.id, 
        e.first_name, 
        e.last_name, 
        j.title AS job_title, 
        j.salary, 
        e.manager_id
      FROM 
        employee e
      LEFT JOIN 
        job j ON e.job_id = j.id
    `);
    return rows;
  } finally {
    connection.end();
  }
}


  


// add a new department
async function addDepartment(name) {
  const connection = await connectToDatabase();
  try {
    const [result] = await connection.query('INSERT INTO department (name) VALUES (?)', [name]);
    return result.insertId;
  } finally {
    connection.end();
  }
}

// add a new position
async function addPosition(title, salary, departmentId) {
  const connection = await connectToDatabase();
  try {
    const [result] = await connection.query('INSERT INTO job (title, salary, department_id) VALUES (?, ?, ?)', [title, salary, departmentId]);
    return result.insertId;
  } finally {
    connection.end();
  }
}

//  add a new employee
async function addEmployee(firstName, lastName, jobId, managerId) {
  const connection = await connectToDatabase();
  try {
    const [result] = await connection.query('INSERT INTO employee (first_name, last_name, job_id, manager_id) VALUES (?, ?, ?, ?)', [firstName, lastName, jobId, managerId]);
    return result.insertId;
  } finally {
    connection.end();
  }
}

//pdate an employee's position
async function updateEmployeePosition(employeeId, jobId) {
  const connection = await connectToDatabase();
  try {
    await connection.query('UPDATE employee SET job_id = ? WHERE id = ?', [jobId, employeeId]);
  } finally {
    connection.end();
  }
}

module.exports= 
{
  getAllDepartments,
  getAllPositions,
  getAllEmployees,
  addDepartment,
  addPosition,
  addEmployee,
  updateEmployeePosition,
};
