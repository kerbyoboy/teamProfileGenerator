const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        Super (name, id, email)
        this.officeNumber = officeNumber
    }
    getRole() {
        return "Manager"
    }
}
