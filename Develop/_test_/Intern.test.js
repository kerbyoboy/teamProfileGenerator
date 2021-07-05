const Intern = require("../lib/Intern");

test('Show School', () => {
    const employTest = "UCF";
    const e = new Intern("Kerby", 1, "name@email.com", employTest, "Intern");
    expect(e.school).toBe(employTest);
});

test('getRole() should to return "Intern"', () => {
    const employTest = "Intern";
    const e = new Intern("Kerby", 1, "name@email.com", "School", "Intern");
    expect(e.getRole()).toBe(employTest);
});

test("Github should return via getGithub()", () => {
    const employTest = "UCF";
    const e = new Intern("Kerby", 1, "name@email.com", employTest, "Intern");
    expect(e.getSchool()).toBe(employTest);
});