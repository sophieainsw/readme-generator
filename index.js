const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "Title",
        message: "What do you want the title of your project to be?"
    },
    {
        type: "input",
        name: "Description",
        message: "What is the description of your project?"
    },
    {
        type: "input",
        name: "Installation",
        message: "What needs to be installed to run this programme?"
    },
    {
        type: "input",
        name: "Usage",
        message: "How do you plan for this programme to be used?"
    },
    {
        type: "list",
        name: "License",       
        message: "Which license would you like to use?",
        choices: ["MIT License","GNU","BSD-2-Clause","Boost Software"],
    },
    {
        type: "input",
        name: "Git",
        message: "What is your Git username?"
    },
    {
        type: "input",
        name: "Contributions",
        message: "Are you open to contributions, Yes or No? If yes, please state what contribitons you would like to be made."
    },
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(
        
        (answers) => {
        console.log(answers);
        generateMarkdown(answers);
        const exampleFile = `<div>${answers.Title}</div> <div>${answers.Description}</div> <div>${answers.Installation}</div> <div>${answers.Usage}</div> <div>${answers.License}</div> <a href = "https://github.com/${answers.Git}"><div>GitHub</div></a>`;
        fs.writeFile("log.html",exampleFile, (err) => err ? console.log(err) : console.log("Success!"));
        }
    );
}

// function call to initialize program
init();
