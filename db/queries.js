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

//  get a list of all roles
async function getAllRoles() {
  const connection = await connectToDatabase();
  try {
    const [rows] = await connection.query('SELECT * FROM role');
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

// add a new role
async function addRole(title, salary, departmentId) {
  const connection = await connectToDatabase();
  try {
    const [result] = await connection.query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [title, salary, departmentId]);
    return result.insertId;
  } finally {
    connection.end();
  }
}

//  add a new employee
async function addEmployee(firstName, lastName, roleId, managerId) {
  const connection = await connectToDatabase();
  try {
    const [result] = await connection.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [firstName, lastName, roleId, managerId]);
    return result.insertId;
  } finally {
    connection.end();
  }
}

//pdate an employee's role
async function updateEmployeeRole(employeeId, roleId) {
  const connection = await connectToDatabase();
  try {
    await connection.query('UPDATE employee SET role_id = ? WHERE id = ?', [roleId, employeeId]);
  } finally {
    connection.end();
  }
}

module.exports = {
  getAllDepartments,
  getAllRoles,
  getAllEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
};
