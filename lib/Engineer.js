
// Inports Employee class
const Employee = require('./Employee');
// Uses Employee class and extends it
class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        //get arguments from Employee
        super(name, id, email);
        this.gitHub = gitHub;
    }

    getGitHub() {
        //creates hyperlink for github
        return "<a href=" + "https://wwww.github.com/" + this.gitHub + ">" + this.gitHub + "</a>";
        }
        //Returns a string to use with the html card
    getRole()    {
        return 'Engineer';
    }

}
//exports Engineer class and constructor
module.exports = Engineer;