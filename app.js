//Import inquirer, js files from lib
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/manager');
//imports fs and path packages
const fs = require('fs');
const path = require('path');
//inports newHtml functions
const newHtml = require('./src/html-creator/html')
//Empty array to collect prompt input objects
const staff = [];
//Defines path to create new 'staff.html' file
const output = path.join(__dirname, 'dist', 'staff.html');

//start app function
async function start(){

//variables for different roles
const managerRole = "Manager";
const engineerRole = "Engineer";
const internRole = "Intern";

//Stores answers in variable once propt questions have been answered
const answers = await  inquirer.prompt([
    
    
  
    // Prompt questions
    {
        type: 'input',
        message: "Employee name?",
        name: 'employee_name',
        validate: function(name){
            return /[a-z1-9]/i.test(name);
        }
    },
    {
        type: 'input',
        message: "Employee id?",
        name: 'employee_id'
    },
    {
        type: 'input',
        message: "Employee email?",
        name: 'employee_email',
        validate: function(email)
        {
            // Regex mail check (return true if valid mail)
            return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
        }
    },
    
    {
        type: 'list',
        message: "What is the employees role?",
        choices: [managerRole, engineerRole, internRole],
        name: 'employee_role'
    },
    
    {
        type: 'input',
        message: "Manager's office number?",
        name: 'managers_office_number',
        when: (answers) => answers.employee_role === managerRole
    },
    
    {
        type: 'input',
        name: 'engineer_github',
        message: "What is your GitHub username?",
        when: (answers) => answers.employee_role === engineerRole
    },
    {
        type: 'input',
        name: 'intern_school',
        message: "What the intern's school?",
        when: (answers) => answers.employee_role === internRole
    },
    {
        type: 'confirm',
        name: 'add_new_staff',
        message: "Would you like to add a new staff member"
    }
    
]);


//Checks object by roll and pushes data to empty array
if(answers.employee_role === managerRole){
    staff.push(new Manager(answers.employee_name, answers.employee_id, answers.employee_email ,answers.managers_office_number))
}
if(answers.employee_role === engineerRole){
    staff.push(new Engineer(answers.employee_name, answers.employee_id, answers.employee_email ,answers.engineer_github))
}
if(answers.employee_role === internRole){
    staff.push(new Intern(answers.employee_name, answers.employee_id, answers.employee_email ,answers.intern_school))
}

console.log(staff);

// ask choice if the user wants to add new employee. 
    if(!answers.add_new_staff) {
        //stores data from newHtml in a variable
       const htmlFile = newHtml(staff);
        
        //Writes file when user doesnt confirms no.
        fs.writeFileSync(output, htmlFile, 'utf-8')

    }
    //If user confirms yes run prompt questions again
    else{
       await start();
    }



}



//run application
start();