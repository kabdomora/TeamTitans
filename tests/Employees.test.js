const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

describe("Employee", () => {
    const employee = new Employee("Kayla", "1234", "kayla@mail.com");
    
    describe("newEmployee", () => {
        it("should create a new employee object", () => {
            const object = new Employee();

            expect(typeof(object)).toBe('object');
        });        
    });

    describe("getName()", () => {
        it("should return the employee name", () => {
            
            const name = "Kayla";

            expect(employee.getName()).toBe(name);
        });
    });

    describe("getId()", () => {
        it("should return the employee id", () => {
            
            const id = "1234";

            expect(employee.getID()).toBe(id);
        });
    });

    describe("getEmail()", () => {
        it("should return the employee email", () => {
            
            const email = "kayla@mail.com";

            expect(employee.getEmail()).toBe(email);
        });
    });
});

describe("Engineer", () => {
    const engineer = new Engineer("Kayla", "1234", "kayla@mail.com", "kabdomora");

    describe("newEngineer", () => {
        it("should create a new engineer object", () => {
            const object = new Engineer();

            expect(typeof(object)).toBe('object');
        });        
    });

    describe("getGithub()", () => {
        it("should return the github id", () => {
            const gitId = "kabdomora";

            expect(engineer.getGithub()).toBe(gitId);
        });
    });

    describe("getRole()", () => {
        it("should return the employee role as Engineer", () => {

            expect(engineer.getRole()).toBe("Engineer");
        });
    });
});

describe("Intern", () => {
    const intern = new Intern("Kayla", "1234", "kayla@mail.com", "UCLA");

    describe("newIntern", () => {
        it("should create a new Intern object", () => {
            const object = new Intern();

            expect(typeof(object)).toBe('object');
        });        
    });

    describe("getSchool()", () => {
        it("should return the school name", () => {
            const school = "UCLA";

            expect(intern.getSchool()).toBe(school);
        });
    });

    describe("getRole()", () => {
        it("should return the employee role as Intern", () => {

            expect(intern.getRole()).toBe("Intern");
        });
    });
});

describe("Manager", () => {
    const manager = new Manager("Kayla", "1234", "kayla@mail.com", "3124");

    describe("newManager", () => {
        it("should create a new Manager object", () => {
            const object = new Manager();

            expect(typeof(object)).toBe('object');
        });        
    });

    describe("getRole()", () => {
        it("should return the employee role as Manager", () => {

            expect(manager.getRole()).toBe("Manager");
        });
    });
});