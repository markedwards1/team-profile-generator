//Inport inquirer
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/manager');
const fs = require('fs');
const path = require('path');
const newHtml = require('./src/html-creator/html')

const staff = [];
const output = path.join(__dirname, 'dist', 'staff.html');

//plan
async function start(){
//prompt questions
//staff variable types


const managerRole = "Manager";
const engineerRole = "Engineer";
const internRole = "Intern";


const answers = await  inquirer.prompt([
    
    
    //Start, Managers details
  
    
    // create a function so when the manager wants to add a new employee it only asks these questions
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

// store answers
//Once we have the staff check for the role
if(answers.employee_role === managerRole){
    staff.push(new Manager(answers.employee_name, answers.employee_id, answers.employee_email ,answers.managers_office_number))
}
if(answers.employee_role === engineerRole){
    staff.push(new Engineer(answers.employee_name, answers.employee_id, answers.employee_email ,answers.engineer_github))
}
if(answers.employee_role === internRole){
    staff.push(new Intern(answers.employee_name, answers.employee_id, answers.employee_email ,answers.intern_school))
}
//Create a role based object
//add to the staff array
console.log(staff);

// ask choice if the user wants to go again. 
    if(!answers.add_new_staff) {
        //generate HTML
       const htmlFile = newHtml(staff);
        
        //use fs to create a new file
        fs.writeFileSync(output, htmlFile, 'utf-8')

    }
    else{
       await start();
    }



}



//run application
start();