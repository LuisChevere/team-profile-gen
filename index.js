const generateHTML = require('./src/generateHTML');
const Manager = require('./lib/managers');
const Engineer = require('./lib/engineers');
const Intern = require('./lib/interns');
const fs = require('fs');
const inquirer = require('inquirer');
const { type } = require('os');
const { default: Choice } = require('inquirer/lib/objects/choice');
const teamArray = [];

const addManager = () => {
    return inquirer.prompt 
    ([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the team manager?',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log ("Please enter managers name.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter manager ID.",
            validate: nameInput => {
                if(isNaN(nameInput)) {
                    console.log ("Please enter manager's ID.")
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter manager email',
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log("Please enter email.")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'OfficeNumber',
            message: 'Please enter manager office number.',
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log ("Please enter office number.")
                    return false;
                } else {
                    return true;
                }
            }
        }
    ])
    .then(managerInput => {
        const {name, id,  email, officeNumber} = managerInput;
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.push(manager);
        console.log(manager);
    })
};

const addEmployee = () => {
    console.log(`Adding employees to Team`);

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please choose employee's role.",
            Choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "what is your employee's name?",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Please enter employee's name.")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter employee ID.",
            validate: nameInput => {
                if(isNaN(nameInput)) {
                    console.log("Please enter employee ID.")
                    return false;
                } else {
                    return true;
                }
                 
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter employee email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if(valid) {
                    return true;
                } else {
                    console.log ('Please enter the email.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter employee github username.",
            when: (input) => input.role === "Engineer",
            Validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Please enter employee github name.")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter intern's school.",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Please enter intern's school.")
                }
            }
        },
        
    ])
}