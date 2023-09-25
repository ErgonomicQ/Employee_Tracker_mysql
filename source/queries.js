const { connectToDatabase } = require('./connection');

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
    const [rows] = await connection.query('SELECT * FROM position');
    return rows;
  } finally {
    connection.end();
  }
}

// get a list of all employees
async function getAllEmployees() {
  const connection = await connectToDatabase();
  try {
    const [rows] = await connection.query('SELECT * FROM employee');
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
    const [result] = await connection.query('INSERT INTO position (title, salary, department_id) VALUES (?, ?, ?)', [title, salary, departmentId]);
    return result.insertId;
  } finally {
    connection.end();
  }
}

//  add a new employee
async function addEmployee(firstName, lastName, positionId, managerId) {
  const connection = await connectToDatabase();
  try {
    const [result] = await connection.query('INSERT INTO employee (first_name, last_name, position_id, manager_id) VALUES (?, ?, ?, ?)', [firstName, lastName, positionId, managerId]);
    return result.insertId;
  } finally {
    connection.end();
  }
}

//pdate an employee's position
async function updateEmployeeposition(employeeId, positionId) {
  const connection = await connectToDatabase();
  try {
    await connection.query('UPDATE employee SET position_id = ? WHERE id = ?', [positionId, employeeId]);
  } finally {
    connection.end();
  }
}

module.exports = {
  getAllDepartments,
  getAllPositions,
  getAllEmployees,
  addDepartment,
  addPosition,
  addEmployee,
  updateEmployeeposition,
};
