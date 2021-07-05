const Manager = require("../lib/Manager");

test("Provide phone number", () => {
    const employTest = 100;
    const e = new Manager("Kerby", 1, "name@email.com", employTest, "Manager");
    expect(e.phoneNumber).toBe(employTest);
});

test('getRole() should to return "Manager"', () => {
    const employTest = "Manager";
    const e = new Manager("Kerby", 1, "name@email.com", 100, "Manager");
    expect(e.getRole()).toBe(employTest);
});

test("Github should return via getGithub()", () => {
    const employTest = "Github";
    const e = new Manager("Kerby", 1, "name@email.com", employTest, "Manager");
    expect(e.getPhoneNumber()).toBe(employTest);
});