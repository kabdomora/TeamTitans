const inquirer = require('inquirer');
const generateFile = require('./utils/generateFile');
const fs = require('fs');
const process = require('process');
const path = require('path');

const empName = "What is their name?";
const empID = "Enter a distinct employee ID.";
const email = "What is their email address?";

const renderEmployees = [];

const manager = [
    {
        type: "input",
        name: "manager_name",
        message: "Provide team manager's full name."
    },
    {
        type: "input",
        name: "manager_id",
        message: empID
    },
    {
        type: "input",
        name: "manager_email",
        message: email
    },
    {
        type: "input",
        name: "manager_office",
        message: "What is their office number?"
    },
];

const engineer = [
    {
        type: "input",
        name: "engineer_name",
        message: empName
    },
    {
        type: "input",
        name: "engineer_id",
        message: empID
    },
    {
        type: "input",
        name: "engineer_email",
        message: email
    },
    {
        type: "input",
        name: "github",
        message: "What is their GitHub username?"
    },
];

const intern = [
    {
        type: "input",
        name: "intern_name",
        message: empName
    },
    {
        type: "input",
        name: "intern_id",
        message: empID
    },
    {
        type: "input",
        name: "intern_email",
        message: email
    },
    {
        type: "input",
        name: "school",
        message: "What school do they attend?"
    },
];

const addAnother = [
    {
        type: "confirm",
        name: "add_another",       
        message: "Would you like to add another employee?",
        default: "true"
    },
    {
        type: "rawlist",
        name: "employee_type",
        choices: [
            "Engineer",
            "Intern"
        ],
        message: "Are they an enginner or an intern?",
        when: (confirm) => confirm.add_another === true
    }
];

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
    // function to cycle through profile prompts
    inquirer.prompt(manager)
    .then(newManager => {
        renderEmployees.push(newManager);
        console.log("Manager added sucessfully!");
        addtlEmployees();
    })
}

function addtlEmployees() {
    inquirer.prompt(addAnother)
    .then(newEmployee => {
        if(newEmployee.add_another === true) {
            if(newEmployee.employee_type === "Engineer") {
                inquirer.prompt(engineer)
                .then(newEngineer => {
                    renderEmployees.push(newEngineer);
                    addtlEmployees();
                })
            } else {
                inquirer.prompt(intern)
                .then(newIntern => {
                    renderEmployees.push(newIntern);
                    addtlEmployees();
                })
            }
        } else {
            createFile()
        }
    });
};

function createFile(allNew) {
    allNew = JSON.stringify(renderEmployees);
    console.log(typeof allNew);
    writeToFile("index.html", generateFile(allNew), (err) => err ?
    console.log(err) : console.log("Profiles are rendered!"));
}

// Initialize app on load
init();
