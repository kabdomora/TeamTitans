const inquirer = require('inquirer');
const generateFile = require('./utils/generateFile');
const fs = require('fs');
const process = require('process');
const path = require('path');

const empName = "What is their name?";
const empID = "Enter a distinct employee ID.";
const email = "What is their email address?";

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



