const Engineer = require("../lib/Engineer");

test("Show Github Account", () => {
    const employTest = "GithubUser";
    const e = new Engineer("Kerby", 1, "name@email.com", employTest, "Engineer");
    expect(e.Github).toBe(employTest);
});

test('getRole() should to return "Engineer"', () => {
    const employTest = "Engineer";
    const e = new Engineer("Kerby", 1, "name@email.com", "Github", "Engineer");
    expect(e.getRole()).toBe(employTest);
});

test("Github should return via getGithub()", () => {
    const employTest = "Github";
    const e = new Engineer("Kerby", 1, "name@email.com", employTest, "Engineer");
    expect(e.getGithub()).toBe(employTest);
});
