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
        it("should return the employee name", () => {
            const id = "123";

            expect(object.getId()).toBe(id);
        });
    });

    describe("getEmail()", () => {
        it("should return the employee name", () => {
            const email = "address@mail.com";

            expect(object.getEmail()).toBe(email);
        });
    });
});