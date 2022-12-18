const generateHTML = require('./src/generateHTML');
const Manager = require('./lib/managers');
const Engineer = require('./lib/engineers');
const Intern = require('./lib/interns');
const fs = require('fs');
const inquirer = require('inquirer');
const { type } = require('os');
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