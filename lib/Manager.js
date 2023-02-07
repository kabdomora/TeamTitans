const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, manager_office) {
        super(name, id, email)
        this.manager_office = manager_office
    }

    getRole() {
        return `Manager`
    }
}

module.exports = Manager;