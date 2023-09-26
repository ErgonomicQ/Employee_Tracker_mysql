
const inquirer = require ("inquirer")


async function promptAddDepartment() {
  return inquirer.prompt([
    {
      name: 'departmentName',
      type: 'input',
      message: 'Enter the name of the department:',
    },
  ]);
}

async function promptAddRole() {
  return inquirer.prompt([
    {
      name: 'title',
      type: 'input',
      message: 'Enter the title of the role:',
    },
    {
      name: 'salary',
      type: 'input',
      message: 'Enter the salary for the role:',
    },
    {
      name: 'departmentId',
      type: 'input',
      message: 'Enter the department ID for the role:',
    },
  ]);
}

async function promptAddEmployee() {
  return inquirer.prompt([
    {
      name: 'firstName',
      type: 'input',
      message: "Enter the employee's first name:",
    },
    {
      name: 'lastName',
      type: 'input',
      message: "Enter the employee's last name:",
    },
    {
      name: 'jobId',
      type: 'input',
      message: "Enter the employee's job ID:",
    },
    {
      name: 'managerId',
      type: 'input',
      message: "Enter the employee's manager ID (optional):",
    },
  ]);
}

async function promptUpdateEmployeeRole() {
  return inquirer.prompt([
    {
      name: 'employeeId',
      type: 'input',
      message: "Enter the employee's ID:",
    },
    {
      name: 'newRoleId',
      type: 'input',
      message: "Enter the new role ID for the employee:",
    },
  ]);
}

module.exports = {
  promptAddDepartment,
  promptAddRole,
  promptAddEmployee,
  promptUpdateEmployeeRole,
};
