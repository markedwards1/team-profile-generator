//Inport inquirer
const inquirer = require('inquirer');



//plan
async function start(){
//prompt questions
const answers = await  inquirer.prompt([
    //Start, Managers details
  
    
    // create a function so when the manager wants to add a new employee it only asks these questions
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
        type: 'list',
        message: "What is the employees role?",
        choices: ['Engineer', 'Intern', 'Manager', ],
        name: 'employee_role'
    },
    
    {
        type: 'input',
        message: "Manager's office number?",
        name: 'managers_office_number',
        when: (answers) => answers.employee_role === 'Manager'
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
        message: "What the intern's school?",
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
       await start();
    }

console.log(answers);

}

//run application
start();