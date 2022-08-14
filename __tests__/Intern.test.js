const Intern = require("../lib/Intern");


describe("Intern Tests", () => {
    it("tests if getSchool() returns school name", () => {
        //Arrange
        const school = 'The Xavier Institute';
        const testSchool = new Intern("mark", "01", "mark@gmailcom", school);

        //Act
        const result = testSchool.getSchool();

        //Assert
        expect(result).toStrictEqual(school);
    });

    it("tests getrole() returns school", () =>{

        //Arrange
        const getRoleString = "Intern";
        const testGetRole = new Intern ('mark', '01', 'mark@gmail.com', getRoleString);
    
        //Act 
        const result = testGetRole.getRole();
    
        //Assert
        expect(result).toStrictEqual(getRoleString);
    });
})

