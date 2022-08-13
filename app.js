//Inport inquirer
const inquirer = require('inquirer');



//plan
async function start(){
//prompt questions
const answers = await  inquirer.prompt([
    //Start, Managers details
    {
        type: 'input',
        message: "Managers name?",
        name: 'managers_name'
    },
    {
        type: 'input',
        message: "Manager id?",
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


// create a function so when the manager wants to add a new employee it only asks these questions

    {
        type: 'list',
        message: "What is the employees role?",
        choices: ['Engineer', 'Intern'],
        name: 'employee_role'
    },
    
    
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
    {
        type: 'input',
        name: 'engineer_github',
        message: "What is your GitHub username?",
        when: (answers) => answers.employee_role === 'Engineer'
    },
    {
        type: 'input',
        name: 'intern_school',
        message: "What is your school name?",
        when: (answers) => answers.employee_role === 'Intern'
    },
    {
        type: 'confirm',
        name: 'add_new_staff',
        message: "Would you like to add a new staff member"
    }
    
]);

// store answers

// ask choice if the user wants to go again. 
    if(!answers.add_new_staff) {
        //generate HTML
    }else{
        start();
    }

console.log(answers);

}

//run application
start();