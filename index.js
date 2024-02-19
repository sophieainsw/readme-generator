const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What do you want the title of your project to be?"
    },
    {
        type: "input",
        name: "description",
        message: "What is the description of your project?"
    },
    {
        type: "input",
        name: "installation",
        message: "What needs to be installed to run this programme?"
    },
    {
        type: "input",
        name: "usage",
        message: "How do you plan for this programme to be used?"
    },
    {
        type: "list",
        name: "license",
        message: "Which license would you like to use?",
        choices: ["MIT License", "GNU", "BSD-2-Clause", "Boost Software"],
    },
    {
        type: "input",
        name: "git",
        message: "What is your Git username?"
    },
    {
        type: "input",
        name: "contributions",
        message: "Are you open to contributions, Yes or No? If yes, please state what contributions you would like to be made."
    },
    {
        type: "input",
        name: "questions",
        message: "What is your email address? This will be used for people to contact you with any questions about your project/contributions."
    },
];


// function to initialize program
function init() {
    inquirer.prompt(questions).then(

        (answers) => {
            console.log(answers);            
            const exampleFile = generateMarkdown(answers);
            fs.writeFile("README2.md", exampleFile, (err) => err ? console.log(err) : console.log("Success!"));
        }
    );
}

// function call to initialize program
init();
