const generateHTML = require('./src/generateHTML');
const Manager = require('./lib/managers');
const Engineer = require('./lib/engineers');
const Intern = require('./lib/interns');
const fs = require('fs');
const inquirer = require('inquirer');
const { type } = require('os');
const { default: Choice } = require('inquirer/lib/objects/choice');
const Employee = require('./lib/employees');
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
                    console.log (" Please enter managers name.");
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
                    console.log (" Please enter manager's ID.")
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
                    console.log(" Please enter email.")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter manager office number.',
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log (" Please enter office number.")
                    return false;
                } else {
                    return true;
                }
            }
        }
    ])
    .then(managerInput => {
        const {name, id, email, officeNumber} = managerInput;
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
            message: "Please choose your employee's role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "what is your employee's name?",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log(" Please enter employee's name.")
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
                    console.log(" Please enter employee ID.")
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
                    console.log (" Please enter the email.")
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
                    console.log(" Please enter employee github name.")
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
                    console.log(" Please enter intern's school.")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: "Would you like to add another member?",
            default: false
        }

    ])
    .then(employeeData => {
        let {name, id, email, role, github, confirmAddEmployee, school} = employeeData;
        let employee;

        if(role === "Engineer") {
            employee = new Engineer (name, id, email, github);
            console.log('New engineer: ');
            console.log(employee);
        } else if(role === "Intern") {
            employee = new Intern (name, id, email, school);
            console.log('New employee intern: ')
            console.log(employee);
        }
        teamArray.push(employee);

        if (confirmAddEmployee) {
            return addEmployee(teamArray);
        } else {
            return teamArray;
        }
    })
};

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Team profile has been successfully created! Check index.html")
        }
    })
};

addManager()
    .then(addEmployee)
    .then(teamArray => {
        return generateHTML(teamArray);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });