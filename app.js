//Inport inquirer
const inquirer = require('inquirer');



//plan
function start(){
//prompt questions
inquirer.prompt([
    //Start, Managers details
    {
        type: 'input',
        message: "Managers name?",
        name: 'managers_name'
    },
    {
        type: 'input',
        message: "Employee id?",
        name: 'managers_id'
    },
    {
        type: 'input',
        message: "Manager's email?",
        name: 'managers_email'
    },
    {
        type: 'input',
        message: "Manager's office number?",
        name: 'managers_office_number'
    },
    //Role - list
    {
        type: 'list',
        message: "What is the employees role?",
        choices: ['Engineer', 'Intern'],
        name: 'employee_role'
    },



    //base questions
    //name
    //id
    //email
    //role specific question
    //"WHEN" user answers manager, engineer, or intern there should be an alternative question: Engineer - github, intern - school

    {
        type: 'input',
        message: "Employee name?",
        name: 'employee_name'
    },
    {
        type: 'input',
        message: "Employee id?",
        name: 'employee_id'
    },
    {
        type: 'input',
        message: "Employee email?",
        name: 'employee_email'
    },
 




])
}

//run application
start();