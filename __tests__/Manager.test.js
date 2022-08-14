const Manager = require("../lib/manager");


describe("Manager.js tests", ()=>{
    it("tests if getOfficeNumber() returns a string", ()=>{
        //Arrange
        const officeNumber = "0892711784";
        const testOfficeNumber = new Manager ("mark", "01", "mark@gmail.com", officeNumber);

        //Act
        const officeNumberTest = testOfficeNumber.getOfficeNumber();
        const result = "0892711784";
        //Assert
        expect(result).toStrictEqual(officeNumberTest)
    });

    it("test if getRole() returns Manager", ()=> {
        //Arrange
        const role = "Manager";
        const testGetRole = new Manager ("mark", "01", "mark@gmail.com", "0892711784")

        //Act
        const getRoleTest = testGetRole.getRole();

        //Assert
        expect(role).toStrictEqual(getRoleTest);

    });
})