const { it, test, expect } = require('@jest/globals');
const Employee = require('./Employee');

test('Test questions', () => {
    const e = new Employee();
    expect(typeof e).tobe(object);
});

test('Employee Name', () => {
    const name = 'Kerby';
    const e = new Employee(name);
    expect(e.name()).tobe(name);
});

test('Employee Id', () => {
    const employTest = 1;
    const e = new Employee('Kerby' ,employTest);
    expect(e.id()).toBe(employTest);
});

test('Employee Email', () => {
    const employTest = 'name@email.com';
    const e = new Employee('Kerby', 1, employTest);
    expect(e.email()).toBe(employTest);
});

test('getName', () => {
    const employTest = 'My Name';
    const e = new Employee(employTest);
    expect(e.getName()).toBe(employTest);
});

test('getId', () => {
    const employTest = 1;
    const e = new Employee('Kerby' ,employTest);
    expect(e.getId()).toBe(employTest);
});

test('getEmail', () => {
    const employTest = 'name@email.com';
    const e = new Employee('Kerby', 1, employTest);
    expect(e.getEmail()).toBe(employTest);
});

test('getRole', () => {
    const employTest = 'My role';
    const e = new Employee('Kerby', 1, employTest);
    expect(e.getRole()).toBe(employTest);
});