const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const Employee = [];

function init() {
    // startHTML();
    addMember();
};

function addMember() {
    return inquirer
    .prompt ([
        {
        name: 'name',
        message: 'Enter your name',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your name to continue');
                return false;
            }
            }
        },
        {
            type: 'list',
            name: 'team role',
            message: 'Select your team role',
            choices: ['Engineer', 'Intern', 'Manager'],
        },
    {
        name: 'id',
        message: 'Enter your Id',
        validate: idInput => {
            if (idInput) {
                return true
            } else {
                console.log('Please enter your Id to continue');
                return false;
            }
        }
    }
])
}
init();