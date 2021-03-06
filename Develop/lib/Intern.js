const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        Super(name, id, email)
            this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
}