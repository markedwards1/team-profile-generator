
//Inports Employee class and constructor
const Employee = require('./Employee');
// uses Employee class and constructor and add to it by creating Intern Class
class Intern extends Employee {
    constructor(name, id, email, school) {
        //Uses employee placeholders and values
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        // returns school for card
        return this.school;
        }

    getRole() {
        // returns Intern for card
        return 'Intern';
    }

}

module.exports = Intern;