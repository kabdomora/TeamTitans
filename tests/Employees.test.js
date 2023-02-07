const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

describe("Employee", () => {
    describe("newEmployee", () => {
        it("should create a new employee object", () => {
            const object = new Employee();

            expect(typeof(object)).toBe('object');
        });        
    });

    describe("getName()", () => {
        it("should return the employee name", () => {
            const name = "Sample Name";

            expect(object.getName()).toBe(name);
        });
    });

    describe("getId()", () => {
        it("should return the employee id", () => {
            const id = "123";

            expect(object.getId()).toBe(id);
        });
    });

    describe("getEmail()", () => {
        it("should return the employee email", () => {
            const email = "address@mail.com";

            expect(object.getEmail()).toBe(email);
        });
    });
});

describe("Engineer", () => {
    describe("newEngineer", () => {
        it("should create a new engineer object", () => {
            const object = new Engineer();

            expect(typeof(object)).toBe('object');
        });        
    });

    describe("getGithub()", () => {
        it("should return the github id", () => {
            const gitId = "GittyId";

            expect(object.getGithub()).toBe(gitId);
        });
    });

    describe("getRole()", () => {
        it("should return the employee role as Engineer", () => {

            expect(object.getRole()).toBe("Engineer");
        });
    });
});

describe("Intern", () => {
    describe("newIntern", () => {
        it("should create a new Intern object", () => {
            const object = new Intern();

            expect(typeof(object)).toBe('object');
        });        
    });

    describe("getSchool()", () => {
        it("should return the school name", () => {
            const school = "UCLA";

            expect(object.getGithub()).toBe(school);
        });
    });

    describe("getRole()", () => {
        it("should return the employee role as Intern", () => {

            expect(object.getRole()).toBe("Intern");
        });
    });
});

describe("Manager", () => {
    describe("newManager", () => {
        it("should create a new Manager object", () => {
            const object = new Manager();

            expect(typeof(object)).toBe('object');
        });        
    });

    describe("getRole()", () => {
        it("should return the employee role as Manager", () => {

            expect(object.getRole()).toBe("Manager");
        });
    });
});