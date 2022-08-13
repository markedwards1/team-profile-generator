const Employee = require("../lib/Employee");


describe("tests getName() module", () => {
    it("getName() returned the name", () =>{
    //Arrange
    const name = 'Mark';
    const testEmployee = new Employee(name, '01', 'mark@gmail.com');
    //Act 
    
    const result = testEmployee.getName();

    //Assert
    expect(result).toStrictEqual(name);
});

    it("getId() returns a string", () =>{
        //Arrange
        const id = '01';
        const testId = new Employee('mark', id, 'mark@gmail.com')

        //Act
        const result = testId.getId();

        //Assert
        expect(result).toStrictEqual(id);
    });

    it("getEmail() to return 'email", ()=>{
        //Arrange
        const email = 'Engineer';
        const testEmail = new Employee('mark', '01', email);

        //Act 
        const result = testEmail.getEmail();

        //Assert
        expect(result).toStrictEqual(email);
    });

    
    
})