
//Inports Employee class and constructor
const Employee = require('./Employee');
//Creates manager class and constructor using employee class and constructor
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    //returns office number to card
    getOfficeNumber() {
        return this.officeNumber;
        }
    // returns role to use with card
    getRole()    {
        return 'Manager';
    }

}

//Exports manager class and construtor
module.exports = Manager;