
//Employee Class and creator. 

class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
 
    }
    //Returns name of employee
    getName(){
        return this.name;
    }
    //Returns ID of employee
    getId(){
        return this.id;
    }
    //Returns Email of employee
    getEmail(){
        return this.email;
    }
    //Returns Role of employee
    getRole(){
        return 'Employee';
    }
    
}

//exports Employee class
module.exports = Employee;