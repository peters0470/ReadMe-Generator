const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = [
        {
          type: "input",
          name: "name",
          message: "What is your project's name?",
        },
        {
          type: "list",
          name: "license",
          message: "Apply License Badge?",
          choices: [
            new inquirer.Separator(),
            "MIT",
            new inquirer.Separator(),
            "GPLv3",
            new inquirer.Separator(),
            "AGPL",
            new inquirer.Separator(),
          ],
        },
        {
          type: "input",
          name: "description",
          message: "Briefly, describe your project.",
        },
      
        {
          type: "editor",
          name: "installationInstructions",
          message:
            "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
        },
        {
          type: "input",
          name: "test",
          message: "What is the command to test the project?",
        },
        {
          type: "input",
          name: "gitHub",
          message: "What's your GitHub username?",
        },
        {
          type: "input",
          name: "email",
          message: "What is your email address?",
        },
        {
          type: "input",
          name: "contributors",
          message: "Who are the contributors of this project?",
        },
      

];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log('Success! Your file had been generated')
    
  })
}

// function to initialize program
function init() {
  inquirer.prompt(questions)
  .then(data => {
    writeToFile('ProfessionalREADME.md', generateMarkdown(data));
  })

}

// function call to initialize program
init();
