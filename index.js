
const inquirer = require ("inquirer")
//import of queries functions
const {
    getAllDepartments,
    getAllPositions,
    getAllEmployees,
    addDepartment,
    addPosition,
    addEmployee,
    updateEmployeePosition,
  } = require('./source/queries');
  //import of asynchronous prompts
  const inquirerPrompts = require('./source/inquirerPrompts.js');
  
  //Main Menu choices

  async function mainMenu() {
    const choices = [
      'View all departments',
      'View all roles',
      'View all employees',
      'Add a department',
      'Add a role',
      'Add an employee',
      'Update an employee role',
      'Exit',
    ];
    const { action } = await inquirer.prompt({
        name: 'action',
        type: 'list',
        message: 'What would you like to do?',
        choices,
      });
      switch (action) {
        case 'View all departments':
          const departments = await getAllDepartments();
          console.table(departments);
          break;
    
        case 'View all roles':
          const roles = await getAllPositions();
          console.table(roles);
          break;
    
        case 'View all employees':
          const employees = await getAllEmployees();
          console.table(employees);
          break;
    
        case 'Add a department':
          const { departmentName } = await inquirerPrompts.promptAddDepartment();
          await addDepartment(departmentName);
          console.log('Department added successfully!');
          break;
    
        case 'Add a role':
          const roleDetails = await inquirerPrompts.promptAddRole();
          await addPosition(roleDetails.title, roleDetails.salary, roleDetails.departmentId);
          console.log('Role added successfully!');
          break;
    
        case 'Add an employee':
          const employeeDetails = await inquirerPrompts.promptAddEmployee();
          await addEmployee(
            employeeDetails.firstName,
            employeeDetails.lastName,
            employeeDetails.positionId,
            employeeDetails.managerId || null
          );
          console.log('Employee added successfully!');
          break;
    
        case 'Update an employee role':
          const employeeToUpdate = await inquirerPrompts.promptUpdateEmployeeRole();
          await updateEmployeePosition(employeeToUpdate.employeeId, employeeToUpdate.newRoleId);
          console.log('Employee role updated successfully!');
          break;
    
        case 'Exit':
          console.log('Goodbye!');
          process.exit(0);
    
        default:
          console.log('Invalid choice. Please try again.');
          break;
      }
    
      mainMenu(); // Return to the beginning
    }
    
    mainMenu(); // Start the application by displaying the main menu
   