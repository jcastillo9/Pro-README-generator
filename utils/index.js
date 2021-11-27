// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = ('fs')
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() [{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
},
{   type: 'input',
    name: 'description',
    message: 'Provide a short description explaingin your project.'
},
{   type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project?.'
},
{   type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for use.',
},
{   type: 'input',
    name: 'credits',
    message: 'List all contributors along with links to their Github profile.',
},
{   type: 'list',
    name: 'license',
    message: 'Choose a license:',
    choices: ['MIT', 'Apache 2.0', 'BSD', 'No License'],
},
{   type: 'input',
    name: 'contributing',
    message: 'How can other developers contribute to your project? '
},
{   type: 'input',
    name: 'tests',
    message: 'Are there any tests you would like your contributors to run?'
},
]

// Function call to initialize app
init();
