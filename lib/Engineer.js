const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.gitHub = gitHub;
    }

    getGitHub() {
      
        return "<a href=" + "https://wwww.github.com/" + this.gitHub + ">" + this.gitHub + "</a>";
        }

    getRole()    {
        return 'Engineer';
    }

}

module.exports = Engineer;