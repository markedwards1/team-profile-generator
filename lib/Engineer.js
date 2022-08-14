const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.gitHub = gitHub;
    }

    getGitHub() {
        return "https://wwww.github.com/" + this.gitHub;
        }

    getRole()    {
        return 'Engineer';
    }

}

module.exports = Engineer;