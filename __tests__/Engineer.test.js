const Engineer = require("../lib/Engineer");


describe("Engineer tests", ()=>{
    it("tests if getGitHub() returns github profile name", () => {
        //Arange
        const gitHub = "markedwards1"
        const testGitHub = new Engineer('mark', '01', 'mark@gmail.com', gitHub);

        //act
        const result = testGitHub.getGitHub();

        //Assert
        expect(result).toStrictEqual(gitHub);

    });

    it("tests getrole() returns Engineer", () =>{

        //Arrange
        const getRoleString = "Engineer";
        const testGetRole = new Engineer ('mark', '01', 'mark@gmail.com', 'gitHubUser');
    
        //Act 
        const result = testGetRole.getRole();
    
        //Assert
        expect(result).toStrictEqual(getRoleString);
    });
})


